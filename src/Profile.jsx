import getImageUrl from './utils.js'

export default function Profile({name, 
    profession, 
    awards,
    discovered, 
    imgCode,
    imageSize=70
}){
    return (
       <>
            
            <section className="profile">
                <h2>{name}</h2>
                <img
                className="avatar"
                src={getImageUrl(imgCode)}
                alt={name}
                width={imageSize}
                height={imageSize}
                />
                <ul>
                <li>
                    <b>Profession: </b> 
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b> 
                    {awards.join(', ')}
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
                </ul>
            </section>
            
       </>
    )
    
}