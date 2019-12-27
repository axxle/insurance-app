import React from 'react';

class RealtyLocationForm extends React.Component {
    render() {
        return(
            <div className="realty-location-form">
                <div><b>Адрес недвижимости</b></div>
                <div>
                    <div className="block-element">
                        <div className="inline-block-element">
                            <input list="countryList" name="country" id="country" className="block-element"/>
                            <datalist id="countryList">
                                <option value="Россия" />
                                <option value="другое" />
                            </datalist>
                            <label htmlFor="country" className="block-element">государство</label>
                        </div>
                        <div className="inline-block-element">
                            <input type="text" id="postIndex" name="postIndex" className="block-element" />
                            <label htmlFor="postIndex" className="block-element">индекс</label>
                        </div>
                        <div className="inline-block-element">
                            <input type="text" id="federalRegion" name="federalRegion" className="block-element" />
                            <label htmlFor="federalRegion" className="block-element">республика, край, область</label>
                        </div>
                        <div className="inline-block-element">
                            <input type="text" id="district" name="district" className="block-element" />
                            <label htmlFor="district" className="block-element">район</label>
                        </div>
                    </div>
                    <div className="block-element">
                        <div className="inline-block-element">
                            <input type="text" id="place" name="place" className="block-element" />
                            <label htmlFor="place" className="block-element">населенный пункт</label>
                        </div>
                        <div className="inline-block-element">
                            <input type="text" id="street" name="street" className="block-element" />
                            <label htmlFor="street" className="block-element">улица</label>
                        </div>
                        <div className="inline-block-element">
                            <input type="text" id="houseNumber" name="houseNumber" className="block-element" />
                            <label htmlFor="houseNumber" className="block-element">дом</label>
                        </div>
                        <div className="inline-block-element">
                            <input type="text" id="houseBlock" name="houseBlock" className="block-element" />
                            <label htmlFor="houseBlock" className="block-element">корпус</label>
                        </div>
                        <div className="inline-block-element">
                            <input type="text" id="building" name="building" className="block-element" />
                            <label htmlFor="building" className="block-element">строение</label>
                        </div>
                        <div className="inline-block-element">
                            <input type="text" id="apartment" name="apartment" className="block-element" />
                            <label htmlFor="apartment" className="block-element">квартира</label>
                        </div>
                    </div>
                    <div className="block-element">
                        <div>КОММЕНТАРИЙ</div>
                        <div>
                            <div className="inline-block-element">комментарий к<br/> договору (не<br/> печатается на<br/> полисе)</div>
                            <div className="inline-block-element"><textarea name="text" className="contractCommentArea" id="comment" name="comment"></textarea></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RealtyLocationForm;
