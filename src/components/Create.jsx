import "../style/newStyle.scss"
import { useState } from "react";

const Create = () => {

    const [nftName, setNftName] = useState("")
    const [nftDescription, setNftDescription] = useState("")
    const [nftPrice, setNftPrice] = useState("")


    return(
        <div className="create">
            <div className="create-header">
                Create New Item
            </div>
            <div className="create-container">
                <div className="create-required"><span style={{ color:'red' }}>*</span> required field</div>
                <div className="image-holder">
                    <div className="image-title">Image <span style={{ color:'red' }}>*</span></div>
                    <div className="image-supported">Supported files: .png, .jpg, .svg, .gif</div>
                    <div className="image-container">

                    </div>

                </div>
                <div className="image-name">
                    <div className="image-title">
                        Name<span style={{ color:'red' }}>*</span>
                    </div>
                    <div className="image-name-input">
                        <input type='text' onChange={(e)=>{  setNftName(e.target.value); }} style={{ width:'100%', borderRadius:"10px", padding:"10px" }} placeholder="Please enter the name..." />
                    </div>
                </div>
                <div className="image-description">
                    <div className="image-title">
                        Description
                    </div>
                    <div className="image-description-input">
                        <textarea onChange={(e)=>{  setNftDescription(e.target.value); }} style={{ width:'100%', borderRadius:"10px", padding:"10px" }} cols="50" rows="4" placeholder="Please enter the description">
                        </textarea>
                    </div>
                </div>
                <div className="image-price">
                    <div className="image-title">
                        Price<span style={{ color:'red' }}>*</span>
                    </div>
                    <div className="image-price-input">
                        <input type="number" onChange={(e)=>{  setNftPrice(e.target.value); }}  style={{ width:'100%', borderRadius:"10px", padding:"10px" }} value={nftName} placeholder="Please enter the name..." />
                    </div>
                </div>
                <input type="file" style={{ display:'none' }}/>
                <div className="image-create-btn"><button className="create-btn">create</button></div>
            </div>
        </div>
    )
};

export default Create;