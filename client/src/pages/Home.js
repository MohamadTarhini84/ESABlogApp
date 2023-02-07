import './Home.css'
import Stories from '../components/home/stories'
import PostInput from '../components/home/postInput'
import AddIcon from '@mui/icons-material/Add';

function Home(){
    return (
        <div className='Home p-4 w-2/3 ml-24'>
            <div className="stories">
                <div className="min-w-ok relative w-32 rounded-md bg-black hover:cursor-pointer">
                    <img className="m-0 rounded-md w-full h-full" 
                        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center 
                                    absolute bottom-1 left-1 text-white bg-blue-500'>
                        <AddIcon/>
                    </div>
                </div>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
            </div>
            <PostInput/>
        </div>
    )
}

export default Home;