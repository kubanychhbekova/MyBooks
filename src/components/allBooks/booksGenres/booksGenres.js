import React from 'react';

const BooksGenres = ({close}) => {
    return (
        <div id="booksGenres">
                <div className="booksGenres" onChange={close}>
                    <div className="booksGenres--radio"  >
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio1"/>
                        <label className="booksGenres--radio__label" htmlFor="radio1">Autographed Books</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio2"/>
                        <label className="booksGenres--radio__label" htmlFor="radio2">Sci-Fi</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio3"/>
                        <label className="booksGenres--radio__label" htmlFor="radio3">For kids</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio4"/>
                        <label className="booksGenres--radio__label" htmlFor="radio4">For teenagers</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio5"/>
                        <label className="booksGenres--radio__label" htmlFor="radio5">Finance</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio6"/>
                        <label className="booksGenres--radio__label" htmlFor="radio6">Detective</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio7"/>
                        <label className="booksGenres--radio__label" htmlFor="radio7">Romantic</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio8"/>
                        <label className="booksGenres--radio__label" htmlFor="radio8">Psychology</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio9"/>
                        <label className="booksGenres--radio__label" htmlFor="radio9">Self-Improvement</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio10"/>
                        <label className="booksGenres--radio__label" htmlFor="radio10">Educational</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio11"/>
                        <label className="booksGenres--radio__label" htmlFor="radio11">Literature</label>
                    </div>
                    <div className="booksGenres--radio">
                        <input className="booksGenres--radio__input" type="radio"
                               name="male" id="radio12"/>
                        <label className="booksGenres--radio__label" htmlFor="radio12">Religion</label>
                    </div>

                </div>
            </div>

    );
};

export default BooksGenres;