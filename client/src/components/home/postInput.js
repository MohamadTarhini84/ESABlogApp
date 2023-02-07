import Button  from "../buttons/button"
import PermMediaIcon from '@mui/icons-material/PermMedia';

function postInput(){

    
    return (
        <div className="w-full h-36 bg-white mt-8 flex flex-col rounded-lg shadow-lg">
            <div className="flex w-full h-2/3 items-center">
                <img src=""/>
                <textarea type="text" placeholder="What's on your mind?" className="p-2 rounded-md focus:outline-none w-full h-full resize-none text-lg"/>
            </div>
            <div className="flex justify-between items-center pr-4 text-lg border-t-2 border-t-gray-200">
                <label class="flex items-center gap-2 hover:cursor-pointer hover:bg-gray-200 
                                p-2 my-1 h-full rounded-bl-lg transition-all ease-in-out">
                    <PermMediaIcon/>
                    <h6 className="text-xs">Click to Upload Media</h6>
                    <input type="file" name="file" class="inputfile edit-popup-element pat-information" />
                </label> 
                <Button>POST</Button>
            </div>
        </div>
    )
}

export default postInput