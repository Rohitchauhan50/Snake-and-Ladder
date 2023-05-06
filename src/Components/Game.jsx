import React from 'react'
import './Game.css';

export default function Game(props) {
  const temp = () => {
    var arr = [];
    arr = document.getElementsByTagName('td');
    for(let i=0;i<arr.length;i++){
      console.log(arr[i].offsetLeft)
    }
    document.getElementById('im').style.position='absolute';
    document.getElementById('im').style.top=arr[35].offsetTop+"px";
    document.getElementById('im').style.left=arr[35].offsetLeft+"px";
  }
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>


    <img height={100} id='im' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyY_LewEWT74v4d-Ha2xaA28wjEBTAaMgCA&usqp=CAU'></img>
    <div className='bor'>
      <table className='Container'>
        <tbody>
        <tr>
          <td>10</td><td>99</td><td>98</td><td>97</td><td>96</td><td>95</td><td>94</td><td>93</td><td>92</td><td>91</td>
        </tr>

        <tr>
          <td>81</td><td>82</td><td>83</td><td>84</td><td>85</td><td>86</td><td>87</td><td>88</td><td>89</td><td>90</td>
        </tr>

        <tr>
          <td>80</td><td>79</td><td>78</td><td>77</td><td>76</td><td>75</td><td>74</td><td>73</td><td>72</td><td>71</td>
        </tr>

        <tr>
          <td>61</td><td>62</td><td>63</td><td>64</td><td>65</td><td>66</td><td>67</td><td>68</td><td>69</td><td>70</td>
        </tr>
        
        <tr>
          <td>60</td><td>59</td><td>58</td><td>57</td><td>56</td><td>55</td><td>54</td><td>53</td><td>52</td><td>51</td>
        </tr>
        <tr>
          <td>41</td><td>42</td><td>43</td><td>44</td><td>45</td><td>46</td><td>47</td><td>48</td><td>49</td><td>50</td>
        </tr>

        <tr>
          <td>40</td><td>39</td><td>38</td><td>37</td><td>36</td><td>35</td><td>34</td><td>33</td><td>32</td><td>31</td>
        </tr>

        <tr>
          <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td>
        </tr>

        <tr>
          <td>20</td><td>19</td><td>18</td><td>17</td><td>16</td><td>15</td><td>14</td><td>13</td><td>12</td><td>11</td>
        </tr>

        <tr>
          <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
        </tr>
        </tbody>

      </table>
      <div className='bottom'>
      <ul className='items'>
        <li>
          <i className="fa" style={{fontSize:"24px"}}>&#xf087;</i>
        </li>

        <li>
          <i style={{fontSize:"24px"}} className="fa">&#xf165;</i>
        </li>

        <li>
          <i style={{fontSize:"24px"}} className="fa">&#xf1e0;</i>
        </li>

        <li>
          <i style={{fontSize:"24px"}} className="fa">&#xf08a;</i>
        </li>

        <li>
          <i style={{fontSize:"24px"}}  class="fa">&#xf019;</i>
        </li>

        <li>
          <i style={{fontSize:"30px"}}  >&#x26F6;</i>
        </li>
      </ul>

      </div>
      <div className='players'>
        
      </div>
      <div className='match'>Match</div>
      <div className='line' >line</div>
    </div>
    </>
  )
}
