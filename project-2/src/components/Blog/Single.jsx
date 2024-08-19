const Single = (props) => { 
    return (
        <>
            <div className="blog-item">
                <img src={props.img} alt="" />
                <h2>{props.title}</h2>
                <p>{ props.desc}</p>
            </div>
        </>
    )
}
 export default Single;