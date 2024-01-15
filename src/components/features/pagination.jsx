// import { useRouter } from 'next/router';
import React from 'react';

import ALink from '../common/ALink';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Pagination({ totalPage }) {
    const { t, i18n } = useTranslation()
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;

    let indexsToShow = [];

    for (let i = 0; i < Math.min(totalPage, 3); i++) {
        if (page < 4 || page > totalPage - 3) {
            if (page < 4) {
                indexsToShow[i] = i + 1;
            }

            if (totalPage > 4 && page > totalPage - 3) {
                indexsToShow[i] = totalPage - 2 + i;
            }
        } else {
            indexsToShow[i] = page - 1 + i;
        }
    }

    return (
        <>
            {totalPage > 1 &&
                <ul className="pagination ltr toolbox-item">
                    {
                        page > 1 &&
                        <li className="page-item">
                            <ALink className="page-link page-link-btn"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setSearchParams((prevParams) => {
                                        return new URLSearchParams({
                                            ...Object.fromEntries(prevParams.entries()),
                                            page: page - 1
                                        });
                                    });
                                }}
                               // to={{ search: { ...query, page: page - 1 } }}
                                scroll={true}>
                                <i className={i18n.language === "ar" ? "icon-angle-right" : "icon-angle-left"}></i>
                            </ALink>
                        </li>
                    }

                    {
                        indexsToShow.map(item =>{
                            console.log("item", item, page)
                            return  (
                                <li className={`page-item ${parseInt(page) === item ? 'active' : ''}`} key={`page-${item}`}>
                                    <ALink className="page-link"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setSearchParams((prevParams) => {
    
                                                return new URLSearchParams({
                                                    ...Object.fromEntries(prevParams.entries()),
                                                    page: item
                                                });
                                            });
                                        }}
                                        //href={{ query: { ...query, page: item } }} 
                                        scroll={false}>
                                        {item}{page === item && <span className="sr-only">(current)</span>}
                                    </ALink>
                                </li>
    
                            )
                        })
                    }

                    {
                        page < totalPage &&
                        <li className="page-item">
                            <ALink className="page-link page-link-btn"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setSearchParams((prevParams) => {

                                        return new URLSearchParams({
                                            ...Object.fromEntries(prevParams.entries()),
                                            page: page + 1
                                        });
                                    });
                                }}
                                //href={{ query: { ...query, page: page + 1 } }}
                                scroll={false}><i className={i18n.language === "ar" ? "icon-angle-left" : "icon-angle-right"}></i></ALink>
                        </li>
                    }
                </ul>
            }
        </>
    )
}

export default React.memo(Pagination);