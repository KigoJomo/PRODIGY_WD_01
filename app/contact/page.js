import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

const contactDetails = [
  {
    title: 'email',
    value: 'kigojomo@gmail.com',
    icon: <EmailOutlinedIcon />,
  },
  {
    title: 'phone',
    value: '+254 712 345 678',
    icon: <PhoneOutlinedIcon />,
  },
  {
    title: 'address',
    value: '123, Nairobi, Kenya',
    icon: <HomeOutlinedIcon />,
  },
]

export default function Contact() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-6">
      <h1>contact</h1>
      <p className="capitalize">get in touch</p>
      <div className="contact-details w-4/5 md:w-2/5 border border-primary flex flex-col gap-6 py-4">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row md:items-center gap-4 p-4"
          >
            <h4 className="capitalize font-semibold md:w-1/2">{detail.title}</h4>
            <div className="md:w-1/2 flex items-center gap-4">
              {detail.icon}
              <p>{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
