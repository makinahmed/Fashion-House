import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useGetProducts from '../Hooks/useGetProducts';

const SinglePanjabi = () => {
    const { products } = useGetProducts();
    const { panjabiId } = useParams();
    let panjabiInt = Number.parseInt(panjabiId);
    let currentProduct;
    if (products.length) {
        currentProduct = products.find(p => p.id === panjabiInt);
    }
    // console.log(currentProduct);
    return (
        <div className="mt-5 d-flex justify-content-around align-items-center">
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={currentProduct?.img} />
                <Card.Body>
                    <Card.Title>Product name: {currentProduct?.category}</Card.Title>
                    <Card.Text>
                        Price :  {currentProduct?.price} Tk.
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* table  */}
            <Table style={{ width: "600px", height: '250px' }} striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Measurement (CM) Size</th>
                        <th>Chest</th>
                        <th>Waist</th>
                        <th>Bottom</th>
                        <th>S2S</th>
                        <th>Full Length</th>
                        <th>Sleeve Length</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>XS	</td>
                        <td>45.5</td>
                        <td>48</td>
                        <td>50.5</td>
                        <td>53	</td>
                        <td>55.5</td>
                        <td>114</td>
                        <td>42.5</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td>41.5</td>
                        <td>44</td>
                        <td>46.5</td>
                        <td>49</td>
                        <td>51.5</td>
                        <td>112</td>
                        <td>114.5</td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td>57.5</td>
                        <td >56</td>
                        <td>60</td>
                        <td>62</td>
                        <td>62.5</td>
                        <td>109</td>
                        <td>41.5</td>
                    </tr>
                    <tr>
                        <td>L</td>
                        <td>34.5</td>
                        <td >36</td>
                        <td>37.5</td>
                        <td>39</td>
                        <td>40</td>
                        <td>107</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>XL</td>
                        <td>40</td>
                        <td>40</td>
                        <td>41.5</td>
                        <td>42</td>
                        <td>41.5</td>
                        <td>107</td>
                        <td>40</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default SinglePanjabi;