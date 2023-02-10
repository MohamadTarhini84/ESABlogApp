import Stories from 'react-insta-stories';

// const storyPopup = forwardRef((props, ref) =>{
    // const [show, setShow]=useState(false)
    
    // function showStory(value){
    //     if(value){
    //         setShow(true)
    //     } else{
    //         setShow(true)
    //     }
    // }

    // useImperativeHandle(ref, ()=>{
    //     return {
    //         func: showStory,
    //         value: show
    //     }
    // })
function storyPopup(props){

    return (
        <div className={`w-screen h-screen fixed flex justify-center z-20 opacity-70 bg-black top-0 left-0`} onClick={()=>props.func(false)} >
            <Stories 
                stories={[{url:"https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
                duration: 5000,
                header: {
                    heading: 'Mohit Karekar',
                    subheading: 'Posted 30m ago',
                    profileImage: 'https://picsum.photos/100/100',
                },}]}
                defaultInterval={1500}
                isPaused={true}
                width={document.body.clientWidth/2}
                height={document.body.clientWidth}
                onAllStoriesEnd={()=>props.func(false)}
                keyboardNavigation={true}/>
        </div>
    )
}

export default storyPopup