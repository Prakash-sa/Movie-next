import { useEffect, useState } from "react"

const MovieCreateForm=(props)=>{

    const [isInitialDataLoaded,setInitialDataLoaded]=useState(false)

    const defaultData={
        name:'',
        description:'',
        rating:'',
        cover:'',
        image:'',
        longDesc:'',
        genre:''
    }

    const formData=props.initialData?{...props.initialData}:defaultData

    const [form,setForm]=useState(formData)

    // useEffect(()=>{
    //     if(props.initialData){
    //         setForm(props.initialData)
    //         setInitialDataLoaded(true)
    //     }
    // },[isInitialDataLoaded])

    const handleChange=(event)=>{
        const target=event.target
        const name=target.id
        setForm({
            ...form,
            [name]: target.value
        })
    }

    const handleGenreChange=(event)=>{
        const { options}=event.target
        const optionsLength=options.length
        let value=[]
        for(let i=0;i<optionsLength;i++){
            if(options[i].selected){
                value.push(options[i].value)
            }
        }

        setForm({
            ...form,
            genre: value.toString()
        })
        
        console.log(form)
    }


    const submitForm=()=>{
        props.handleFormSubmit({...form})
    }

    return (
        <form className='w-full my-20 mx-10 overflow-hidden'>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'> Name</label>
                <input className="border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                id="name" 
                onChange={handleChange}
                placeholder='Lord of Rings'
                value={form.name}
                >
                </input>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
                <input className="border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                id="desctiption"
                onChange={handleChange}
                placeholder='Somewehere in the middle-earth'
                value={form.description}
                ></input>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Rating</label>
                <input className="border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="number" 
                max="5" 
                min="0" 
                id="rating"
                onChange={handleChange}
                value={form.rating}
                ></input>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Image</label>
                <input className="border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                onChange={handleChange}
                id="image" 
                placeholder='http://...'
                value={form.image}
                ></input>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Cover</label>
                <input className="border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                onChange={handleChange}
                id='cover'
                placeholder='http://...'
                value={form.cover}
                ></input>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Long Description</label>
                <textarea className="border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                onChange={handleChange}
                id="longDesc"
                value={form.longDesc}
                ></textarea>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Genre</label>
                <select id="genre" multiple onChange={handleGenreChange}>
                    <option>Drama</option>
                    <option>Music</option>
                    <option>Adventure</option>
                    <option>Fantasy</option>
                </select>
            </div>
            <button type="button" onClick={submitForm} className="inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-blue-600">
                {props.submitButton||'Create'}
            </button>
        </form>
    )
}

export default MovieCreateForm