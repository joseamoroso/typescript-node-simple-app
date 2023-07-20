import { RequestHandler } from "express";

export const studentController: RequestHandler = (req, res, next) => {
    return res.status(200).send([
        {
            name: 'sudhir',
            age: 33
        },
        {
            name: 'anish',
            age:0.8
        }
    ])
}