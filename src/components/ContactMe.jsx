import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";

export default function ContactMe() {
    const [form, setForm] = useState({
        userEmail: "",
        subject: "",
        body: ""
    })

    const handleFormUpdate = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.userEmail) {
            alert("An email must be provided.")
            return;
        }
        if (!form.body) {
            alert("Body must not be empty")
            return;
        }

        const formspreeUrl = `https://formspree.io/f/xzzpogpv`
        fetch(formspreeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(form)
        }).then((res) => {
            if (res.ok) {
                alert("Successfully sent email!")
                clearForm()
            } else {
                alert("Failed to send email, please try refresh or again later")
            }
        }).catch((e) => {
            alert("Failed to send email, please try refresh or again later")
        })

    }


    const clearForm = () => {
        setForm({
            userEmail: "",
            subject: "",
            body: "",
        })
    }


    return (
        <section className='flex flex-col rounded px-80 py-20 border-t-2 border-solid border-white bg-indigo-950' id='contactme'>
            <h1 className="text-center text-white font-bold text-5xl">
                Contact Me!
            </h1>
            <hr className="my-8"/>       
            <h1 className="text-white text-center font-bold text-3xl pb-8">
                Send me an email!
            </h1>
            <form className="bg-indigo-900 p-4 rounded w-9/10 flex flex-col">
                <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    onChange={handleFormUpdate}
                    value={form.userEmail}
                    placeholder="Your E-mail Address"
                    className="bg-gray-900 text-white rounded p-4 my-2 text-3xl "
                />
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    onChange={handleFormUpdate}
                    value={form.subject}
                    placeholder="Subject"
                    className="bg-gray-900 text-white rounded p-4 my-2 text-3xl "
                />
                <textarea
                    type="text"
                    name="body"
                    id="body"
                    onChange={handleFormUpdate}
                    value={form.body}
                    placeholder="Send me a message!"
                    className="bg-gray-900 text-white rounded p-4 my-2 text-3xl min-h-80"
                />
                <button className="w-full py-4 my-2 rounded text-white text-3xl font-bold bg-emerald-800" onClick={handleSubmit}>
                    Send Email
                </button>
            </form>
        </section>
    )
}