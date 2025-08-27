import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // FarmFlow logo

const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const [form, setForm] = useState({
    fullName: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
    payment: 'Cash on Delivery',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const paymentMethods = [
    {
      name: 'Google Pay',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5E2v7Ep_xjaf2CAsjQX8ML2UQaBnKQWBwQ&s'
    },
    {
      name: 'PhonePe',
      image: 'data:image/png;base64,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'
    },
    {
      name: 'Paytm',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEX///8AKnEAuPUAtPUAtvUAIG3K5/tqdZsAHmzt+P59haQAG2uX1fnE5/sAEGh4zvgfu/WOlK3l9P1eapQAJG8AGGrFx9IAAGV4gJ7n6OyZnrTf8PwAC2dvd5pLV4VAUILQ0tpPw/a7v8/Q7fyhprvz8/Xx8fNcx/fc3eQrQHvHytUABmaQ1Pmr3Pq+5PuFjKeussQOLXAeNnYyRXyprb5RXYh0yvfWxI9kAAAETElEQVR4nO3a63KqOgCG4SCxYq14AhGLike01lp16/1f2uYUCAjWdkELzvfMrB8xyvhKhSCLEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKLTu++6v30K+PigVX//6TeRpLlYq4vyv30WOlrTy4IXWoxe+O4GPXNgSK49c2N213T14q7Ber98Y/jt91Iuq7T91/gnrwSjwPPxchzMr9tKF/8DQHw9WzujFmk6p32ebWpZ1cU8ZranH6hLydGlTStuXD28L89a0Yg+tLM+eA6Ma05ClHtcxloMZSVLlxob1kD17qWa6Y1Pzx9u9PXoVK1eoZU88sQnxvcs+Aiq27X1ct9gnIrY/MiusVYVrVe0zLFSic4p8MP0PR/IfkvvuuC/7Y+mZD+FNIxNtyk2Ju7nIjcVWroWCoM3SCp1GM1b49rPC2A6mkWFmiSmFgsK+jNeFgnJc5lAYJ2b0h5pW2BikFwrqMFr4w7/SryxzLVQOq/RC5fQbhTSbI2paobA10wsFY/0Lhe6zcyxU/cPpRFUCwaQ8+43CdsaFkmxTw8Kh9wTzPGaOQaK6+LKwLjrC4yN1hu/RQur/4x/gzxiZrG6CQqnTn836CyVeyJuw2Ubny0LSbTab8xZ7w/Rlbg9JpJBe7IQmv4vtVc7rNK9C2TsD7qUbhZ3GNwpdL6xQbLKHuDO+O/4I91rX/WRovoUL9Ubhs5RlIfXO6d1YMcl5HyYW6mvT8R9LerBCc3DStoYjPAw9UuFyJEvXZ8QHKtSPDSFBrNB76awchcNI4fKYvCCIFiqT9Wq10k9sXxe6MHybbuFAFRK5hcGJxb6ecjYQ/DEXtFA4bmyHyBlfDxqSCocp+YUtFCIrT3dhtkhrcAvf5JTZwhZGOQfIXtqkW0jSZktSqOr8lVNVs22DoVe4T9nF5ShUxoRbaVdrzvW2vomsvMlSSLp2LEuh0ecLVe/nxeB76RUSs5GYWIpCtUbuKCR9IeloW4ZCeULuKiR6TVOr8R1Z9EJFUdU9ubPQbhz2js5Dh3B3FrzwsJl02G+l9xQmbKqghernSndxv1J+r3BtFLtQnl1Pfq8wWMWVsdAvGsfGZNkZDXyjc7CIK1FhuKZpTM7n8yb4zrLChSYFwiMqt4eLXtiLLsuvG4aJ18fcpopemHp9dLtQW5WmcP2jwmov3ELRC0kv5RL4ZqF/A7UchbqafPVwq9DgzySFL7SvHhLXrdt+aqEx4l9fpEIjsZCsx8b176Xy2Z/txL6oiqpEbwZ8q7DiPSHj+xYLzf0529iqesoz3kYnLar6zFZ2M03mGNqpE9vKTqSe8H8MebfdHP6N+jYbX7xxi42zuUNKvFsSppkW6FjqEdzKdd0PvSVtY/fiaYYP1V89XTZ+mnvYE/z5h/4fqQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwx/4Hxb185wsOargAAAAASUVORK5CYII='
    },
    {
      name: 'UPI',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABGlBMVEX///+AgIBxbWp8fHzs7Oy3t7f4+PjPz8/rcgeIiIhuamfv7++Xl5ekpKTT09OBgYENhjXa2dl1cW7h4ODFw8H19fWsrKzGxcTm5uYAhTCem5l5dXLtcQCAfHqUkY/4cQAAiz1WU1FFQj8vKyY4NTGzsbAAhCb9cABjYl9bWFZMSUYjHxg2NC9FQz8+OjcqJiH30rP1uY7D1sfzwJz1gyGMopE0mkvxm1w+oVz98ufyiTrd6OBNm1671L/0qnSBqosAhh76ijZInF3twqWflk3Wdw59hTD43cf0fwM5jlDkdxOChDCPgiylzrDLfB1irHe2fyWlgCmftaOyxbb42cFwhjH/gy+Pp27/6N5Yrnzn9fCQwZvzp2oYEAjunKr7AAAK7UlEQVR4nO2dCZubyBGGexDHAAIGAYJBlxFiLGFJ42t3M17vxt4kjp1N4iSbw9kk//9vpC/GYnZAzSDbwq7Xz2NZFkd/VFVXdYNaCAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHw2BHI3MNU7qdOGff2kE/ScqaV4DVV6me70PnXLG+H0wwYaA+ukW/IYuiYq0O6Id/4SyxQSqDifuqF3R48EBGa7e/Q6wa5Eb78F32/cV0KtE/hD/drvHHlfDF4LzEQMfiyodr+wZL++SzWLTqbfJX0UrWj6sHazIbN2L/tIzTokUSGxLhQ97svKR2vWITGnrPlxzTbD/ZscM4WBqo3Io3Bvd3S08ExXHWMh26CbPkoImIn0yu6UOaneWRMW2bxXlQjUPksUH7VNh8VjWTGs+JjbuLtOiqmPM5OZuOoCdAJmJKviU5OauGd/1CYdmL7z2SsEG4LCo+cLUAhxCAqPni9AIcQhKDx6vgCFEIdCCgPbpeyZNFbd3c1cca5vdsrsrkLYYFrlMDbMDImyZ6issc0MOuB2JXEGEy5paDBc+u7hI/ry+KdahQexoU6bboyC+s2GXCG1oWI0kGhM6QHUCXvHp86ePKWvX339wRWao91mVMPaJ43om2kThdKI3umM+CXi7f1m9pC8/Ori8YdWaPMT+/WbRdJO+8xBE4HGlFrL5ydiDboaj5/hl2/Pz5/XKTxEHJa8r5pS+7RGJjTY7SNud4NFw8PZKTHidxdndUY8iA259w32bBaz9g1or2E1U0i7lmDCdtLZ8b4fn46fIvTri7M6Ix5CIfc+qeoonGA3WtWRIUShkDqpu9sXI/RsfEqM+PX52dmLaiMeQmHhfXse7eDpwaB3SQLFFyD02VWRWB9WJCWWK95hgafjlz/fOzs7O/+hWuEB4pB732hPGhaM1hJuqQ9jSUmasFzxmxlWeDr7LVFYY8QD2DAQzBU6M8BkT9Iswa+KRO//yfxE/GbmN8SGp+PfUYXVkXgAhfau91UjS6X2iVFYjb4pSiJWOV09pQpPZ6+Iwuru9AAKeXQYe55b0cSSZomIW421j3e/A+bmv2cCr41YFYkHiENB7yvlCkHKGZ7VCIbDPnsyYwpP7/+j1ojtbWgaYt7Hk6a+Z7MSRR9GSzbPKEXDa27D0/EfmBHf3H6M9jYsipM93nejfWKU+jBeqvNxxVVhwmsjVnSn7W0o6H3KrsOZrieCX7oq012DkpLt9IYRb4/E1gpVVkkZ+7yP94qssovFCpqioqF9WCCVktL342uFp7MfmRFvHSe2Vlh4X/2TVcUAi4UhLtmkBrA+rEhKrGRTn+4oLIx4a05sHYcl76sm3M1lUZWWW+F9WLkkevfeSYkR/8i60z/dprCtDbn3SfUCy0mz0fC+yPDlku3RuKTwz9SIF28/gEKzVBpXUkw/OLR900Y2lOg+RUlUDO/HJYFnlQJbKxSsVKLBTvuCZiZkZy/cnA1grl7vKLxfJ7B1HJYHNJWUBlh80kMS6k4n/MhFUmK5YjcM7/+F9aS3C2xrw7L3VdNnmlgus4qBrMAIsbhyQXmWbSdX3P8ri8Gvqk7dTmG5NK4k4E7KhvelAYMg5eG9+nJ8Q+CLv1Xt2VKh4PA+2k2aN6YExchKSemduMC2cRgz79tXshXTTjSXCV6VMsVUK3PS65Jt9uO96mqG0c6GqrTjfTXwknJA21fuM8S4UbIVuWL2isXgdzW7trNhJFaylaaCiz5j31UpUU5K6mvuoq/2zNEQ2tmwNI0i2L4bU4JilNwc/Z3N0MzoqOm8XmBLhVOxXrFoH43WomRrclOySEr8RI9IGI7/+a9zIvDet/X7tlLInVRy9iQ1Xtmx9jlstDVp8v3HoiTi8whkKnj8+t2/zwUEtotDTeIIDfPYQFbmjW30ZPWN4T0u2cazdz8Tgef7BLazYcN7D/QwpWGUKPGum6MnWODrK/TTxdnFm70CWynk0SEKG8jyDCo1mfk2d0siUrKNX+JU8/b84rnAUdoo9JqZkLWPN7ZNyfZ09uwKZ503F89FUmqbONSWjRTSXCG3KNkGLCld3X9GeqnHL54LdVZtbCgPGhjRmNALXu4zBKGlOh5IsTnnRy+psv/8INYbt+ppwslAGP593Cl7JzUp2bzRhDBilZP6X6bsrWC6aZfxA6FpT0rRWkazb2sGQaDiP+yNWnrZDzwT9RkoBBuCwqPnzgrlFf5rGCNa7k99tIzkZZI4yDC9VZJP0SBZTVkH6iQrXIzIuNReumQFCmThflDFXb+UJIlqkS7S8rN8uZp72nZBj5dNEZ1UG2Z9/P+5qyfJKrDIcTx6EmTTsjbbpMsoMJLEqOlZ7xyHSoL/WipqSkYMcztKAyV3Nc9bqMOVF3ruNvSlnLQ+eOBbaYD0JT5ZD9m5rK5l8iV45K41Wws2ZJCx9KNwrbjeVvPpmGOVoTX5hxG62lqxvTTEW24VK0XDla3h65TgFqvG0vZ0X9vYWp2T3dmGE2wEeS2Hi9RG0VYdSmiS4SQVj3Bz8SsWg4IFudJagsIt8nMs1924Wxn5/9NQdDlFvoG3c9eXPjLXAfK2WHbOD55G0Tr1UZDKKFqoyF/hLaMFOY5ukUw4zQe40mF36iy9PjfeWWGCW28vUDwcbgN/iRwLJdv5NhhkKJ9vFyjBpg02ZDot3o5STd2iBF/65QI77nJlIWMVo+l6nmq+7j+QXaxOwV4vz3M6AedukBX7qezmKsKXDvXTeRqG6+nGRvl2ngfuSt5gxaxsGC3m27oa8K4KvQ12NWuJVhpancR9det6eWSawdbT5rInowU+qb0hXrqMQxmNRmGOK+8pjjJ/EurDqRKjeSh7CI8XRkY2wg0lbVD1B6TZwxEaKOhkOcTDEVKrLRXTQyejhYzk1DNNdR5n28hPWEvWdlRbId01DjVy/NwPFgGS80svukQhDjTsdCgjz0pgKyA1J6Md4oE4aPVeoiO0xUdKbDlNVN0yN+Q42Khqfon9IXeRHOGgJb1TL0Yb/P9JquAPsUvTeE7cgYUUchLdcCZzRcMujNTAzX/ZuLLCO9rQfaBnK4lECFb7IBhuUI+M/6wcTRJ9FGWLyWBBB4Raije+xFc5TFCELYQvvXqpoYmlrPWe761xDLmphx3exP6srE7wLkHquXgv5OHdXBKGqTPJohSFqaljJ1DmeB9HR8s862+9eKuPaueW7xyH2oj4D+u1FRSGaEh8RdFwBolj1R8OFZYryBYZaYJpIQ8Hp2+T7ZHvaXHcdyM6aAxN5BF79yU6lYO3dOlgVwvoLmRLO8JnyyJyUIucyM7IXKZuIx9/WO+ln3/Gh7q0+wrBhqDw6PkCFEIcgsKj5wtQCHEICo8eUPi5Kwzop70mX3M5OtjanVXPNKl67cddgLlh9ZJzFv1Yb/J1syNDY4FWOd/IVh10Gj1GeFzEVEGv8p6zx9y0uwsn2k5tSXO9NGRn+xqVL0Jb83wSX8BUYFHso4Qv0FrbkfDFhp3OrQRN4IvJ1y9tWSzn3cHeJrB42/c8rMvXSsbR2q2VaNXr5bxrF7tG150N1RjKgdoJAk+5XpK9rpthyDs//aB3hvc/HiDwrVV5etJhhJ4nD+JP3cw744g+qRt29Dc8GvzcgWx1UKPebInnILQc3fnUPz4iyImj61mjZ1gZphcq3cDXog6P+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4w/g/18Boz6xryaQAAAABJRU5ErkJggg=='
    },
    {
      name: 'Debit/Credit Card',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/512px-Visa_Logo.png'
    },
    {
      name: 'Net Banking',
      image: 'data:image/png;base64,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'
    },
    {
      name: 'Cash on Delivery',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnXkqwKYNrlF_IzTKsJGCyGKnn_UigDMHYw&s'
    }
  ];

  const handlePlaceOrder = () => {
    if (!form.fullName || !form.address || !form.city || !form.pincode || !form.phone) {
      alert("Please fill in all delivery details.");
      return;
    }
    setOrderPlaced(true);
  };

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2rem',
        color: '#2e7d32',
        marginBottom: '2rem'
      }}>
        Almost There !!
      </h2>

      {!orderPlaced ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          {/* Left - Cart Items */}
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h3>🛒 Order Summary</h3>
            {cartItems.length === 0 ? (
              <p>Your cart is empty. <Link to="/buyer/products">Shop now</Link></p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  alignItems: 'center',
                  borderBottom: '1px solid #eee',
                  paddingBottom: '1rem'
                }}>
                  <img src={item.images?.[0]} alt={item.name} style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }} />
                  <div style={{ flex: '1' }}>
                    <h4>{item.name}</h4>
                    <p>Price: ₹{item.price}</p>
                    <p>Qty: {item.quantity || 1}Kg </p>
                    <button onClick={() => removeFromCart(item.id)} style={{
                      marginTop: '0.5rem',
                      padding: '6px 12px',
                      backgroundColor: '#d32f2f',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right - Delivery + Payment */}
          <div style={{
            flex: '1',
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3>🚚 Delivery Details</h3>
            {['fullName', 'address', 'city', 'pincode', 'phone'].map((field, idx) => (
              <input
                key={idx}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={handleChange}
                style={{
                  marginBottom: '1rem',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            ))}

            <h3 style={{ marginTop: '1rem' }}>💳 Payment Method</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  onClick={() => setForm((prev) => ({ ...prev, payment: method.name }))}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '2px solid',
                    borderColor: form.payment === method.name ? '#2e7d32' : '#ccc',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    backgroundColor: '#fff',
                    boxShadow: form.payment === method.name ? '0 0 8px #2e7d32' : '',
                  }}
                >
                  <img src={method.image} alt={method.name} style={{
                    width: '40px',
                    height: '40px',
                    marginBottom: '0.5rem',
                    objectFit: 'contain'
                  }} />
                  <span>{method.name}</span>
                </div>
              ))}
            </div>

            <h3 style={{
              marginTop: '1rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#2e7d32'
            }}>Total: ₹{calculateTotal()}</h3>

            <button onClick={handlePlaceOrder} style={{
              marginTop: '1rem',
              padding: '12px',
              backgroundColor: '#2e7d32',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}>Place Order</button>
          </div>
        </div>
      ) : (
        // RECEIPT
        <div style={{
          maxWidth: '650px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.6'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            borderBottom: '1px solid #ccc',
            paddingBottom: '1rem'
          }}>
            <img src={logo} alt="FarmFlow Logo" style={{
              width: '60px',
              height: '60px',
              objectFit: 'contain',
              marginRight: '1rem'
            }} />
            <div>
              <h2 style={{ color: '#2e7d32', margin: 0 }}>FarmFlow</h2>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#555' }}>
                Rooted in Soil, Powered by Technology.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            ✅ <strong>Thank you, {form.fullName}!</strong><br />
            We’re carefully packing your order with love and local goodness. 🌾📦
          </p>

          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ marginBottom: '0.3rem', color: '#2e7d32' }}>📍 Delivery Address</h4>
            <p style={{ margin: 0 }}>{form.address}, {form.city} – {form.pincode}</p>
            <p style={{ margin: '4px 0' }}><strong>Phone:</strong> {form.phone}</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ marginBottom: '0.3rem', color: '#2e7d32' }}>💳 Payment Method</h4>
            <p style={{ margin: 0 }}>{form.payment}</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ marginBottom: '0.3rem', color: '#2e7d32' }}>🛒 Order Summary</h4>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              {cartItems.map(item => (
                <li key={item.id}>
                  {item.name} × {item.quantity || 1} = ₹{item.price * (item.quantity || 1)}
                </li>
              ))}
            </ul>
          </div>

          <h3 style={{
            color: '#2e7d32',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            marginTop: '1rem'
          }}>
            Total Paid: ₹{calculateTotal()}
          </h3>

          <p style={{ marginTop: '1.5rem', color: '#555' }}>
            🚚 Your order will be dispatched soon. We’ll notify you once it’s out for delivery.
          </p>

          <Link to="/buyer/products" style={{
            marginTop: '2rem',
            display: 'inline-block',
            textDecoration: 'none',
            padding: '10px 20px',
            backgroundColor: '#2e7d32',
            color: '#fff',
            borderRadius: '8px',
            fontSize: '1rem',
          }}>
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
