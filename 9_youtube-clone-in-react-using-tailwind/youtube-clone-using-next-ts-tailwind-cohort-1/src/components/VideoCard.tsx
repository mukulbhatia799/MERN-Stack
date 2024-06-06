export function VideoCard(props: any) {     // any specifies of any data type.
    return <div className="">
    <img src={props.thumbnail} alt={"thumbnail-photo.jpg"} ></img>
    <div className="grid grid-cols-12">
      <div className="col-span-1">
        <img className="col-span-2 rounded-2xl" src={props.thumbLogo} alt={"author-channel-logo"}></img>
      </div>
      <div className="col-span-11 text-sm pl-5">
        <div>{props.title}</div>
        <div>{props.author}</div>
        <div>{props.views} | {props.timestamp}</div>
      </div>
    </div>
  </div>
}