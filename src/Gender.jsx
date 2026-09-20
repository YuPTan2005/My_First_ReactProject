const genderOptions = ['male', 'female', 'other'];

export default function Gender({ gender, handleChange }) {
    const genderRadioOptions = genderOptions.map(genderOption => {
        return (
            <div key={genderOption} className='genderOption'>
                <input 
                    type='radio' 
                    id={genderOption}
                    name='gender' 
                    value={genderOption}
                    checked={gender === genderOption}
                    onChange={handleChange}
                    />

                <label htmlFor={genderOption} className="inline ml-1">
                    {genderOption.charAt(0).toUpperCase() + genderOption.slice(1)}
                </label>
            </div>
        )
    });

    return (
        <section>
            <label htmlFor='genders' id='genderLabel' className="necessary">
                Gender
            </label>
            <div 
                id='genders' 
                role='group' 
                aria-labelledby='genderLabel' 
                aria-required
                className='flex flex-row justify-between px-12'
                >
                {genderRadioOptions}
            </div>
        </section>
    )
}
