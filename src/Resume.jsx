export default function Resume({ handleResume }) {
    return (
        <section className='section' role='document'>
            <label className="necessary" htmlFor="resume">Upload Resume</label>
            <input 
                type='file' 
                id='resume' 
                name="resume"
                className="
                    file:border
                    file:border-black
                    file:px-1
                    file:text-sm
                    file:bg-gray-200
                    file:text-black
                    "
                onChange={handleResume}
                required
                />
        </section>
    )
}