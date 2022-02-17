import React from 'react'

function Modal(props) {

    let closeButton=null

    const submitModal=()=>{
        alert("Submitting Modal")
        closeButton.click()
    }

  return (
    <div className='py-10'>
        <button type="button" className="inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-blue-600" data-toggle="modal" data-target="#exampleModalTwo">
        Create Movie
        </button>

        <div className="modal hidden fixed top-0 left-0 w-full h-full outline-none fade" id="exampleModalTwo" tabindex="-1" role="dialog">
            <div className="modal-dialog relative w-auto pointer-events-none max-w-lg my-8 mx-auto px-4 sm:px-0" role="document">
                <div className="relative flex flex-col w-full pointer-events-auto bg-white border border-gray-300 rounded-lg">
                    <div className="flex items-start justify-between p-4 border-b border-gray-300 rounded-t">
                        <h5 className="mb-0 text-lg leading-normal">Create Movie</h5>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="relative flex p-4">
                        {props.children}
                    </div>
                    <div className="flex items-center justify-end p-4 border-t border-gray-300">
                        <button type="button" ref={ele=>closeButton=ele} className="inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-gray-600 mr-2" data-dismiss="modal">Close</button>
                        {props.hasSubmit && <button type="button" onClick={submitModal} className="inline-block font-normal text-center px-3 py-2 leading-normal text-base rounded cursor-pointer text-white bg-blue-600">Save changes</button>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal