export default function PersonalDetails({ details, handleChange }) {
    return (
        <section>
            <div>
                <label className='necessary' htmlFor='firstName'>First Name</label>
                <input 
                    id='firstName' 
                    name="firstName"
                    placeholder="Enter First Name" 
                    className="inputText"
                    onChange={handleChange}
                    value={details.firstName}
                    required
                    />
            </div>
            <div>
                <label className='necessary' htmlFor='lastName'>Last Name</label>
                <input 
                    id='lastName' 
                    name="lastName"
                    placeholder="Enter Last Name" 
                    className="inputText" 
                    onChange={handleChange}
                    value={details.lastName}
                    required
                    />
            </div>
            <div>
                <label className='necessary' htmlFor='email'>Enter Email</label>
                <input 
                    id='email' 
                    name="email"
                    placeholder="Enter Email" 
                    className="inputText" 
                    onChange={handleChange}
                    value={details.email}
                    required
                    />
            </div>
            <div>
                <label className='necessary' htmlFor='contact'>Contact</label>
                <input 
                    id='contact' 
                    name="contact"
                    placeholder="Enter Mobile Number" 
                    className="inputText" 
                    onChange={handleChange}
                    value={details.contact}
                    maxLength='15'
                    required
                    />
            </div>
        </section>
    )
}