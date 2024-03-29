const {createServer} =require("http")
const {parse}=require("url")
const next=require("next")
const express=require("express")
const bodyparser=require('body-parser')
const fs=require('fs')
const path=require('path')

const filePath='./data.json'
const moviesData=require(filePath)


const dev=process.env.NODE_ENV!=='production'
const app=next({dev})
const handle=app.getRequestHandler()

app.prepare().then(()=>{
    const server=express()

    server.use(bodyparser.json())

    server.get('/api/v1/movies',(req,res)=>{
        return res.json(moviesData)
    })

    server.get('/api/v1/movies/:id',(req,res)=>{
        const {id}=req.params
        // const movieIndex=moviesData.findIndex((movie)=>movie.id===id)
        // const movie=moviesData[movieIndex]
        const movie=moviesData.find((movie)=>movie.id===id)
        return res.json(movie)
    })

    server.post('api/v1/movies',(req,res)=>{
        const movie=req.body
        moviesData.push(movie)

        const pathToFile=path.join(__dirname,filePath)
        const stringifiedData=JSON.stringify(moviesData,null,2)
        fs.writeFile(pathToFile,stringifiedData,(err)=>{
            if(err){
                return res.status(422).send(err)
            }
            return res.json("Movie has been successfully added!")
        })
    })

    server.delete('/api/v1/movies/:id',(req,res)=>{
        const {id}=req.params

        const movieIndex=moviesData.findIndex((movie)=>movie.id===id)

        moviesData.splice(movieIndex,1)

        const pathToFile=path.join(__dirname,filePath)
        const stringifiedData=JSON.stringify(moviesData,null,2)
        fs.writeFile(pathToFile,stringifiedData,(err)=>{
            if(err){
                return res.status(422).send(err)
            }
            return res.json("Movie has been successfully added!")
        })
    })

    server.patch('/api/v1/movies/:id',(req,res)=>{
        const {id}=req.params
        const movie=req.body

        const movieIndex=moviesData.findIndex((movie)=>movie.id===id)

        moviesData[movieIndex]=movie

        const pathToFile=path.join(__dirname,filePath)
        const stringifiedData=JSON.stringify(moviesData,null,2)
        fs.writeFile(pathToFile,stringifiedData,(err)=>{
            if(err){
                return res.status(422).send(err)
            }
            return res.json("Movie has been successfully added!")
        })
    })



    server.get('*',(req,res)=>{
        return handle(req,res)
    })

    const PORT=process.env.PORT || 3000;
    server.use(handle).listen(PORT,(err)=>{
        if(err)throw err
        console.log('>Ready on port '+ PORT)
    })
})


