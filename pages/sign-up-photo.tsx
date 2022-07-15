import Image from "next/image";
import { useEffect, useState } from "react";

export default function SignUpPhoto() {
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [localForm, setLocalForm] = useState({ name: '', email: '' })

    useEffect(() => {
        const getLocalForm = localStorage.getItem('user-form')
        setLocalForm(JSON.parse(getLocalForm))
    }, [])

    const onSubmit = () => {
        const local = localStorage.getItem('user-form')
        const form = JSON.parse(local)
        const data = new FormData()

        data.append('name', form.name)
        data.append('email', form.email)
        data.append('password', form.password)
        data.append('image', image)
    }

    return (
        <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
            <div className="container mx-auto">
                <form>
                    <div className="form-input d-md-block d-flex flex-column">
                        <div>
                            <div className="mb-20">
                                <div className="image-upload text-center">
                                    <label htmlFor="avatar">
                                        {
                                            imagePreview ? <img src={imagePreview} className="img-preview" alt="Gambar Upload" /> : <Image src="/icon/upload.svg" width={120} height={120} alt="Gambar Upload" />
                                        }
                                    </label>
                                    <input onChange={(event) => {
                                        const img = event.target.files[0];
                                        setImage(img);
                                        setImagePreview(URL.createObjectURL(img));
                                    }} id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                                </div>
                            </div>
                            <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                            <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                            <div className="pt-50 pb-50">
                                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite
                                    Game</label>
                                <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg"
                                    aria-label="Favorite Game">
                                    <option value="" disabled>Select Category</option>
                                    <option value="fps">First Person Shoter</option>
                                    <option value="rpg">Role Playing Game</option>
                                    <option value="arcade">Arcade</option>
                                    <option value="sport">Sport</option>
                                </select>
                            </div>
                        </div>

                        <div className="button-group d-flex flex-column mx-auto">
                            <button type="button" onClick={onSubmit} className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                                role="button">Create My Account</button>
                            <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#"
                                role="button">Terms &
                                Conditions</a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
