import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../../auth/index';
import { createProduct, getCategories } from './apiAdmin';
import Layout from 'components/Layout';

const AddProduct = () => {

    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        name: '',
        brand: '',
        type: '',
        description: '',
        categories: '',
        amazonLink: '',
        photo: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    const [pros, setPros] = useState([]);
    const [specifications, setSpecifications] = useState([]);
    const [cons, setCons] = useState([]);

    const {
        name,
        brand,
        type,
        description,
        categories,
        amazonLink,
        loading,
        error,
        createdProduct,
        formData
    } = values;

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, categories: data, formData: new FormData() })
            }
        })
    }

    useEffect(() => {
        init();
    }, [])

    const handleChange = name => event => {
        if (name === 'photo') {
            const value = event.target.files[0];
            formData.set(name, value)
            setValues({ ...values, [name]: value })
        }else if(name === 'pros') {
            const _tempPros = [...pros];
            _tempPros[event.target.dataset.id] = event.target.value;
            setPros(_tempPros);
        }
        else if (name === 'specifications') {
            const _tempVal = [...specifications];
            _tempVal[event.target.dataset.id] = event.target.value;
            setSpecifications(_tempVal);
        }
        else if (name === 'cons') {
            const _tempVal = [...cons];
            _tempVal[event.target.dataset.id] = event.target.value;
            setCons(_tempVal);
        }       
        else {
            const value = event.target.value;
            formData.set(name, value)
            setValues({ ...values, [name]: value })
        }

    }

    const handleAddVal = name => e => {
        e.preventDefault();
        if (name === 'pros') {
            return setPros(prev => [...prev, {}]);
        }
        if (name === 'specifications') {
            return setSpecifications(prev => [...prev, {}]);
        }
        if (name === 'cons') {
            return setCons(prev => [...prev, {}]);
        }
    };
    const handleRemoveVal = (name, idx) => () => {
        if (name === 'pros') {
            const removedVal = pros.filter((s, sidx) => idx !== sidx)
            return setPros(removedVal);
        }
        if (name === 'specifications') {
            const removedVal = specifications.filter((s, sidx) => idx !== sidx)
            return setSpecifications(removedVal);
        }
        if (name === 'cons') {
            const removedVal = cons.filter((s, sidx) => idx !== sidx)
            return setCons(removedVal);
        }
    };

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, error: '', loading: true });
        pros.map(pro => {
            return formData.append('pros', pro);
        })
        specifications.map(spec => {
            return formData.append('specifications', spec);
        })
        cons.map(con => {
            return formData.append('cons', con);
        })
        createProduct(user._id, token, formData)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                } else {
                    console.log(JSON.stringify(data))
                    setValues({
                        ...values,
                        name: '',
                        brand: '',
                        type: '',
                        photo: '',
                        amazonLink: '',
                        categories: '',
                        description: '',
                        loading: false,
                        error: '',
                        createdProduct: data.result.name
                    })
                    setPros([]);
                    setSpecifications([]);
                    setCons([]);
                }
            })
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <label className="text-muted">Post photo</label>
            <div className="form-group">
                <label className="btn btn-secondary"  style={{width:'100%', textAlign:'left'}}>
                    <input onChange={handleChange('photo')} style={{ color: 'white' }} type="file" name="photo" accept="image/*" />
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>
            <div className="form-group">
                <label className="text-muted">Brand</label>
                <input onChange={handleChange('brand')} type="text" className="form-control" value={brand} />
            </div>
            <div className="form-group">
                <label className="text-muted">Type</label>
                <input onChange={handleChange('type')} type="text" className="form-control" value={type} />
            </div>
            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')} type="text" className="form-control" value={description} />
            </div>
            <div className="form-group">
                <label className="text-muted">Specifications</label>
                {
                    specifications.map((item, index) => (
                        <div style={{ display: 'flex', marginBottom: '2px' }} key={index}>
                            <input
                                className="form-control"
                                style={{ marginRight: '10px' }}
                                data-id={index}
                                type="text"
                                value={item.index}
                                onChange={handleChange('specifications')}
                            />
                            <button
                                onClick={handleRemoveVal('specifications', index)}
                                style={{ fontSize: 'small' }}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                }
                <div>
                    <button onClick={handleAddVal('specifications')}>+ Add Specifications</button>
                </div>
            </div>
            <div className="form-group">
                <label className="text-muted">Pros</label>
                {
                    pros.map((item, index) => (
                        <div style={{ display: 'flex', marginBottom: '2px' }} key={index}>
                            <input
                                className="form-control"
                                style={{ marginRight: '10px' }}
                                data-id={index}
                                type="text"
                                value={item.index}
                                onChange={handleChange('pros')}
                            />
                            <button
                                onClick={handleRemoveVal('pros', index)}
                                style={{ fontSize: 'small' }}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                }
                <div>
                    <button onClick={handleAddVal('pros')}>+ Add Pros</button>
                </div>
            </div>
            <div className="form-group">
                <label className="text-muted">Cons</label>
                {
                    cons.map((item, index) => (
                        <div style={{ display: 'flex', marginBottom: '2px' }} key={index}>
                            <input
                                className="form-control"
                                style={{ marginRight: '10px' }}
                                data-id={index}
                                type="text"
                                value={item.index}
                                onChange={handleChange('cons')}
                            />
                            <button
                                onClick={handleRemoveVal('cons', index)}
                                style={{ fontSize: 'small' }}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                }
                <div>
                    <button onClick={handleAddVal('cons')}>+ Add Cons</button>
                </div>
            </div>
            <div className="form-group">
                <label className="text-muted">Category</label>
                <select onChange={handleChange('category')} className="form-control">
                    <option>Please select</option>
                    {categories && categories.map((c, i) => (<option key={i} value={c._id}>{c.name}</option>))}
                </select>
            </div>
            <div className="form-group">
                <label className="text-muted">Amazon Link</label>
                <input onChange={handleChange('amazonLink')} type="text" className="form-control" value={amazonLink} />
            </div>
            <div style={{display:'flex', height:'45px'}}>
            <button className="btn btn-outline-primary">Create</button>
            <div >
                {showLoading()}
                {showSuccess()}
                {showError()}
            </div>
            </div>
        </form>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none', marginLeft:'10px' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert" style={{ display: createdProduct ? '' : 'none' }}>
            <h5>{createdProduct} is added !!!</h5>
        </div>
    );

    const showLoading = () => (
        loading && (<div className="alert"><h5>Loading...</h5></div>)
    )

    return (
        <Layout>
            <div className="col-md-8 offset-md-2">
                <div className="dashboardCard" style={{ padding: '3%', marginTop: '5%' }}>
                    {newPostForm()}
                </div>
            </div>
        </Layout>
    );
}

export default AddProduct;