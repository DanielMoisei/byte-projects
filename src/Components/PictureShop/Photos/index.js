import React, {useContext} from "react"

import Image from "../Image"
import {Context} from "../DataContext"
import {getClass} from "../useClass"

function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos
