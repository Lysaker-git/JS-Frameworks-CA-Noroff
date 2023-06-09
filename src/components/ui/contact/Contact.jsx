import { ContactContainer } from "./contact.styles";

export default function ContactPage () {

    function handleSubmission(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        for (const [key, value] of formData.entries()) {
            const keyUpperCase = `${key.charAt(0).toUpperCase()}${key.slice(1)}`
            console.log(`${keyUpperCase}: ${value}`);
        }
        e.target.reset();
    }

    return (
        <ContactContainer>
            <h1>What can we do for you?</h1>
            <form onSubmit={handleSubmission}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" minLength={3} required/>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="subject" id="subject" minLength={3} required/>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required/>
                    <label htmlFor="body">Write your message here:</label>
                    <textarea name="body" id="body" required minLength={3}></textarea>
                </div>
                <button type="submit">Submit Form</button>
            </form>
        </ContactContainer>
    )
}