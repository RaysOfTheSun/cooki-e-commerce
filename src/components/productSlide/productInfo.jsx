import React from 'react';

const ProductInfo = ({info, serving, ingredients, points},) => {

    if (ingredients && serving && info && points) {
        return (
            <div className={'cookie-container d-flex justify-content-around align-items-center flex-mobile-column'}>
                <div className={'d-flex justify-content-center align-items-center align-self-start flex-column pad-big-5'}>
                    <div
                        className={'d-flex justify-content-center align-items-center flex-column flex-grow-50 align-self-start border-bottom-cookie pb-5'}>
                        <h3 className={'align-self-start font-weight-bold'}>Ingredients</h3>
                        <p className={'pt-3'}>{ingredients}</p>
                    </div>
                    <div className={'d-flex justify-content-center align-items-center flex-column flex-grow-50 align-self-start pt-5 pb-5 w-100 border-bottom-cookie'}>
                        <ul className={'pl-3 align-self-start'}>
                            {
                                points.map((point, index) => (
                                    <li className={'mb-2 mt-2'} key={index}>{point}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={'d-flex justify-content-center align-items-center flex-column flex-grow-50 pad-big-5 w-100'}>
                    <h3 className={'align-self-start font-weight-bold'}>Nutritional Information</h3>
                    <div className={'d-flex justify-content-center align-self-start w-100 mr-4 mt-4 mb-4 ml-0'}>
                        <div className={'d-flex justify-content-around align-items- flex-column w-100'}>
                            <p className={'m-0'}>Serving size</p>
                            <p>{serving}</p>
                        </div>
                        <div className={'d-flex justify-content-around align-items- w-100 flex-column'}>
                            <p className={'m-0'}>Serving per container</p>
                            <p>1</p>
                        </div>
                    </div>
                    <table className={'table w-100'}>
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                        {
                            Object.keys(info).map((key, index) => (
                                <tr key={index}>
                                    <td>{key === 'totalFat' ? 'total fat' : key}</td>
                                    <td>{info[key]}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }

};

export default ProductInfo;