import { createMovie } from "../actions"
import Modal from "./modal"
import MovieCreateForm from './movieCreateForm.js'
import {useRouter} from 'next/router'


const SideMenu=(props)=> {
  const {categories}=props
  const router=useRouter()
  let modal=null

  const handleCreateMovie=(movie)=>{
    createMovie(movie).then(()=>{
      modal.close()
      router.push('/')
    })
  }

  return (
    <div>
      <Modal ref={elem=>modal=elem} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie}/>
      </Modal>
        <h1 className="my-4">Movie DB</h1>
        <div className="list-group">
          {categories&&categories.map((catogary,index)=>(
            <a onClick={()=>{props.changeCategory(catogary.name)}} key={catogary.id} href="#" className={`list-group-item ${props.activeCategory===catogary.name?'active':''}`}>{catogary.name}</a>
          ))}
        </div>
    </div>
  )
}

export default SideMenu