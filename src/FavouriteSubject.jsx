const favSubjectOptions = ['english', 'math', 'physics'];

export default function FavouriteSubject({ favouriteSubject, handleFavouriteSubject }) {
    const favSubjectCheckboxes = favSubjectOptions.map(subjectOption => {
        return (
            <div key={subjectOption} className='favSubjectOption'>
                    <input 
                        type='checkbox' 
                        id={subjectOption} 
                        name='favouriteSubject' 
                        value={subjectOption}
                        onChange={handleFavouriteSubject}
                        checked={favouriteSubject.includes(subjectOption)}
                        />
                    <label htmlFor={subjectOption} className='inline  ml-1'>
                        {subjectOption.charAt(0).toUpperCase() + subjectOption.slice(1)}
                    </label>
                </div>
        )
    });

    return (
        <section>
            <label htmlFor='favSubject' id='favSubjectLabel'>
                Your favourite subject
            </label>
            <div id='favSubject' 
                role='group' 
                aria-labelledby='favSubjectLabel' 
                className='flex flex-row justify-between px-12'
                aria-required
                >
                {favSubjectCheckboxes}
            </div>
        </section>
    )
}