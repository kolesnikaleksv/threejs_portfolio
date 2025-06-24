import {useRef, useState} from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
  })

  const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
  }
  // service_1ndktii
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    
    try {
      await emailjs.send(
        'service_1ndktii',
        'template_ugkly0u',
        {
          from_name: form.name,
          to_name: 'Oleksandr',
          from_email: form.email,
          to_email: 'kolesnikaleksv@gmail.com',
          message: form.message,
        }, 'I3N11IEOX2wKx6qXk',
      )
      setLoading(false);
      alert('Your message has been sent!');
      setForm({
        email: "",
        name: "",
        message: "",
      })
    } catch (error) {
      setLoading(false);
      alert(`Something went wrong! ${error}`,)
    }
  }
  return (
    <section className="c-space">
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        <img src="/assets/terminal.png" alt="Terminal background"
             className="min-h-screen h-full absolute inset-0 "/>
        <div className="contact-container py-12">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-[#AFB0B6] mt-6">Whether you're looking to build your website, improve your existing
            platform, or bring unique project to life, I'm here to help</p>
          <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col mt-12 space-y-7">
            <label className="space-y-3 flex flex-col">
              <span className="field-label">Full Name</span>
              <input type="text" name="name" onChange={handleChange} placeholder="John Doe" value={form.name} required
                     className="field-input"/>
            </label>
            <label className="space-y-3 flex flex-col">
              <span className="field-label">Email</span>
              <input type="email" name="email" onChange={handleChange} placeholder="johndoe@gmail.com"
                     value={form.email}
                     required
                     className="field-input"/>
            </label>
            <label className="space-y-3 flex flex-col">
              <span className="field-label">Your message</span>
              <textarea name="message" onChange={handleChange} placeholder="Hi, I wanna give you a job..."
                        value={form.message}
                        required rows={5}
                        className="field-input"/>
            </label>
            <button type="submit" className="field-btn"
                    disabled={loading}>
              {loading ? 'Sending...' : 'Send message'}
              <img src="/assets/arrow-up.png" alt="arrow up" className="field-btn_arrow"/>
            </button>
          </form>
        </div>
      </div>

    </section>
  )
}
export default Contact
