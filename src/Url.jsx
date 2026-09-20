export default function Url({ url, handleChange }) {
    return (
        <section>
            <label className='necessary' htmlFor="url">Enter URL</label>
            <input 
                type='url' 
                id='url' 
                name="url"
                placeholder="Enter url" 
                className="inputText" 
                onChange={handleChange} 
                value={url}
                />
        </section>
    )
}