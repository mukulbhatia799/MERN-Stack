import { VideoCard } from "./VideoCard"


const VIDEOS = [
    {
        thumbnail: "/thumbnail-photo.jpg",
        thumbLogo: "/thumbnail-channel-logo.jpg",
        title: "How to learn coding in 30 days",
        author: "Mukul Bhatia",
        views: "30M",
        timestamp: "3 days ago"
    }, 
    {
        thumbnail: "/thumbnail-photo.jpg",
        thumbLogo: "/thumbnail-channel-logo.jpg",
        title: "How to learn Singing in 30 days",
        author: "Mukul Bhatia",
        views: "30M",
        timestamp: "3 days ago"
    },
    {
        thumbnail: "/thumbnail-photo.jpg",
        thumbLogo: "/thumbnail-channel-logo.jpg",
        title: "How to learn Dancing in 30 days",
        author: "Mukul Bhatia",
        views: "30M",
        timestamp: "3 days ago"
    },
    {
        thumbnail: "/thumbnail-photo.jpg",
        thumbLogo: "/thumbnail-channel-logo.jpg",
        title: "How to learn running in 30 days",
        author: "Mukul Bhatia",
        views: "30M",
        timestamp: "3 days ago"
    },
    {
        thumbnail: "/thumbnail-photo.jpg",
        thumbLogo: "/thumbnail-channel-logo.jpg",
        title: "How to learn walking in 30 days",
        author: "Mukul Bhatia",
        views: "30M",
        timestamp: "3 days ago"
    },
    {
        thumbnail: "/thumbnail-photo.jpg",
        thumbLogo: "/thumbnail-channel-logo.jpg",
        title: "How to learn jumping in 30 days",
        author: "Mukul Bhatia",
        views: "30M",
        timestamp: "3 days ago"
    },
    {
        thumbnail: "/thumbnail-photo.jpg",
        thumbLogo: "/thumbnail-channel-logo.jpg",
        title: "How to learn playing in 30 days",
        author: "Mukul Bhatia",
        views: "30M",
        timestamp: "3 days ago"
    },
    {
        thumbnail: "/thumbnail-photo.jpg",
        thumbLogo: "/thumbnail-channel-logo.jpg",
        title: "How to learn flying in 30 days",
        author: "Mukul Bhatia",
        views: "30M",
        timestamp: "3 days ago"
    }
]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {VIDEOS.map(video => 
            <div className="">
                <VideoCard thumbnail={video.thumbnail} thumbLogo={video.thumbLogo} title={video.title} author={video.author} views={video.views} timestamp={video.timestamp}/>
            </div>
        )}
    </div>
}