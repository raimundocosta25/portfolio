import type { NextApiRequest, NextApiResponse } from 'next'
import { ref as sRef, uploadBytesResumable, getDownloadURL, list, getBlob, listAll } from 'firebase/storage'
import { onValue, ref, set, child, get, update, remove, query, equalTo, } from "firebase/database";

import { app, storage, database } from '../../firebase/firebase';
import prisma from '../../lib/prisma';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case "GET":
            getImages(req, res)
            break;
        case "POST":
            addImages(req, res)
            break;
    }
}

const getImages = async (req: NextApiRequest, res: NextApiResponse) => {

    try {

        const listStorage = await list(sRef(storage, 'Images'))

        var listValue = listStorage.items.map((value) => { return { value } })

        // Atualizando database
        for (const value of listValue) {

            var imageName = value.value.name
            const imageUrl = await getDownloadURL(sRef(storage, `Images/${imageName}`))

            const item = await prisma.imageLinks.findFirst({
                where: {imageUrl: imageUrl}
            })

            if(item){ continue }

            await prisma.imageLinks.create({
                data: {
                    name: imageName,
                    imageUrl: imageUrl
                }
            })

        }

        // Getting images from database

        const urlList = await prisma.imageLinks.findMany({})

        console.log(urlList);
        

        res.status(200).send({ data: urlList })

    } catch (error) {
        res.status(400).send({ error })
    }
}


const addImages = async (req: NextApiRequest, res: NextApiResponse) => {

    try {

        res.status(200).send({ msg: 'Tudo certo' })

    } catch (error) {
        res.status(400).send({ error })
    }
}
