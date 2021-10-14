import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGetProducts from '../Hooks/useGetProducts';

const SingleSharee = () => {
    const { products } = useGetProducts();
    const { shareeId } = useParams();
    return (
        <div className="my-5">

            <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime saepe corrupti ipsa fugit deleniti, enim similique sunt, voluptatum pariatur autem voluptatem vel sequi debitis ut maiores provident sed expedita velit beatae sit! Atque deserunt odit libero dolorum nemo, repellat ratione rerum suscipit, nam voluptas iure impedit expedita minima velit?
            </p>
            <h2 className="py-5">This is Your Product id: {shareeId}
            </h2>
        </div>
    );
};

export default SingleSharee;