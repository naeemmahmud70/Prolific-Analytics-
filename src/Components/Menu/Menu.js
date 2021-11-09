import React from 'react';
import MenuJson from '../MenuJson';

const Bonus = () => {

    return (
        <section className="d-flex justify-content-center m-3">
            <div class="dropdown">
                <a class="btn border border-secondary  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    {MenuJson.items['5c91cba358267312089b8696'].data.name}
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li class="dropdown">
                        <a class="dropdown-item" href="#" id="dropdownSubMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> {MenuJson.items['5c91cba658267312089b8699'].data.name}</a>
                        <a class="dropdown-item" href="#" id="dropdownSubMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> {MenuJson.items['5c91cba858267312089b869e'].data.name}</a>

                        <li class="dropdown">
                            <a class="dropdown-item" href="#" id="dropdownSubMenuLink" data-bs-toggle="dropdown" aria-expanded="false">{MenuJson.items['5c91cba958267312089b86a3'].data.name}</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownSubMenuLink">
                                <li><a class="dropdown-item" href="#">{MenuJson.items['5c91cbe458267312089b8730'].data.name}</a></li>
                                <li><a class="dropdown-item" href="#">{MenuJson.items['5c91cbe558267312089b8735'].data.name}</a></li>
                            </ul>
                        </li>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Bonus;