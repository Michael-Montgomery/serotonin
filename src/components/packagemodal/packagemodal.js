import './packagemodal.css';

function PackageModal(props) {
    return(
       <div id='package-modal-wrapper' style={{backgroundColor: props.package.color}}>
        <h2>{props.package.title}</h2>
        <div id='package-modal-picture-wrapper' style={{backgroundImage: `url(${props.package.imageLink})`}}>

        </div>
        <p id='package-modal-description'>{props.package.description}</p>
        <h3>What's in this package:</h3>
        <ul>
            {
                props.package.contents.map((item, idx) => {
                    return(
                        <li key={idx}><p className='package-modal-content-item'>{item}</p></li>
                    )
                })
            }
        </ul>
        <div className='center'><button>{`Add to cart ($${props.package.price})`}</button></div>
       </div>
    )
}

export default PackageModal;