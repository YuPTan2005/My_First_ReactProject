export default function Choice({ handleChange }) {
    return (
        <section>
            <label htmlFor="choice">Select Your Choice</label>
            <select 
                name='choice' 
                id='choice' 
                className="border border-gray-500/80 rounded-sm w-full p-1"
                onChange={handleChange}
                >
                <option value='Select your Ans'>Select your Ans</option>
                <option value='Another option'>Another option</option>
            </select>
        </section>
    )
}