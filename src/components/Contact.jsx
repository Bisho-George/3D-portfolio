import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../style"
import { EarthCanvas } from './canvas'
import { sectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Error = () => {
  return (
    <div

      className="p-3 m-3 text-center bg-red-800 rounded"
    >
      <p className={`${styles.sectionSubText}`}>
        Something went wrong, please try again
      </p>
    </div>
  )
}

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs.send(
      'service_pzg9jhe',
      'template_uo73hgo',
      {
        form_name: form.name,
        to_name: 'Bishoy',
        from_email: form.email,
        to_email: 'bishogeorge689@gmail.com',
        message: form.message
      },
      'pA9p-0yII9AFIZrCZg'
    ).then(
      () => {
        setloading(false);
        alert('Thank you I will contact you as soon as possible')
        setform({
          name: '',
          email: '',
          message: ''
        })

      },
      (error) => {
        setloading(false);
        setError(true);
      }
    )
  }

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {!error ? '' :
          <Error />
        }

        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
            />
          </label>
          <button
            type="submit"
            className="px-8 py-3 font-bold text-white transition-colors shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl hover:bg-black"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 items-center xl-h-auto md:h[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default sectionWrapper(Contact, "contact") 