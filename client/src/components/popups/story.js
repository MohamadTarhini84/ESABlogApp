import Stories from 'react-insta-stories';

function storyPopup(props){
    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }

    return (
        <div className={`w-screen h-screen fixed flex justify-center z-20 opacity-95 bg-black top-0 left-0`} onClick={()=>props.func(false)} >
            <Stories 
                stories={[{url:props.story.storyPic,
                duration: 5000,
                header: {
                    heading: props.story.username,
                    subheading: `Posted ${timeSince(Date.parse(props.story.createdAt))} ago`,
                    profileImage: props.story.profilePic,
                },
                storyContent: {
                    width: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%'
                }}]}
                defaultInterval={1500}
                isPaused={true}
                width={document.body.clientWidth/2}
                onAllStoriesEnd={()=>props.func(false)}/>
        </div>
    )
}

export default storyPopup