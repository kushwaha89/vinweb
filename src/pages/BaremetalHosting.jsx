import React, { useState } from "react";

function BaremetalHosting() {

  const [activeTab, setActiveTab] = useState("bare");
  const [activeOS, setActiveOS] = useState("linux");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialImages = [

"https://picsum.photos/600/400?1",
"https://picsum.photos/600/400?2",
"https://picsum.photos/600/400?3",
"https://picsum.photos/600/400?4"
];


  return (
    <>
<style>{`

body{
  margin:0;
  font-family:Arial, Helvetica, sans-serif;
}

.hero{
  display:grid;
  grid-template-columns:1fr 1fr;
  background:#0b2f2c;
  color:white;
  padding:80px;
  align-items:center;
}

.hero-left h1{
  font-size:48px;
  line-height:1.2;
}

.bold{
  background:#c6ff00;
  color:black;
  padding:4px 14px;
  display:inline-block;
  transform:rotate(-6deg);
}

.hero-right img{
  width:100%;
  border-radius:12px;
}

.hero-buttons{
  margin-top:20px;
}

.primary{
  background:#c6ff00;
  padding:14px 26px;
  border:none;
  border-radius:25px;
  margin-right:10px;
  font-weight:bold;
  cursor:pointer;
}

.outline{
  border:2px solid white;
  background:transparent;
  color:white;
  padding:14px 26px;
  border-radius:25px;
  cursor:pointer;
}

.trusted{
  background:#063a35;
  color:white;
  text-align:center;
  padding:40px;
}

.logos{
  display:flex;
  justify-content:space-around;
  margin-top:20px;
  font-weight:bold;
}

.choose{
  text-align:center;
  padding:100px 20px;
  background:#f5f5f5;
}

.tabs{
  margin-top:30px;
}

.tabs button{
  margin:10px;
  padding:12px 22px;
  border-radius:20px;
  border:none;
  cursor:pointer;
  background:#e5e5e5;
  font-weight:600;
}

.active{
  background:black !important;
  color:white;
}

.os-buttons{
  display:flex;
  justify-content:center;
  gap:20px;
  margin-top:20px;
}

.os-btn{
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 20px;
  border-radius:20px;
  border:none;
  cursor:pointer;
  background:#e5e5e5;
  font-weight:600;
}

.os-btn img{
  width:18px;
  height:18px;
}

.pricing{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:30px;
  padding:80px;
  background:#f5f5f5;
}

.card{
  background:white;
  padding:30px;
  border-radius:10px;
  box-shadow:0 5px 15px rgba(0,0,0,0.08);
}

.tag{
  background:#dff5ee;
  display:inline-block;
  padding:5px 10px;
  font-size:12px;
  border-radius:5px;
  margin-bottom:10px;
}

.buy{
  background:#b6ff00;
  border:none;
  padding:14px 30px;
  border-radius:30px;
  font-weight:bold;
  margin:15px 0;
  cursor:pointer;
}

.card ul{
  padding-left:18px;
}

.popular-label{
  color:blue;
  font-size:12px;
  margin-bottom:10px;
}

.focus{
background:#f5f5f5;
padding:120px 80px;
text-align:center;
}

.focus h1{
font-size:48px;
margin-bottom:70px;
}

.focus-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:60px;
max-width:1200px;
margin:auto;
}

.focus-card{
text-align:left;
}

.icon-box{
width:40px;
height:40px;
background:#b6ff00;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
margin-bottom:20px;
font-size:20px;
}

.focus-card h3{
font-size:22px;
margin-bottom:10px;
}

.focus-card p{
color:#555;
line-height:1.6;
}

.performance{
padding:120px 20px;
text-align:center;
}

.performance h1{
font-size:46px;
}

.testimonial-section{
padding:120px 80px;
background:#f5f5f5;
display:flex;
flex-direction:column;
align-items:center;
}

.testimonial-card{
background:#062f2f;
color:white;
border-radius:20px;
padding:60px;
display:grid;
grid-template-columns:1fr 320px;
gap:40px;
max-width:1100px;
width:100%;
align-items:center;
}

.testimonial-card h1{
font-size:56px;
margin:0;
}

.testimonial-card p{
font-size:18px;
line-height:1.6;
}

.testimonial-img{
width:100%;
height:260px;
object-fit:cover;
border-radius:14px;
}

.dots{
margin-top:30px;
display:flex;
gap:10px;
}

.dot{
width:14px;
height:14px;
border-radius:50%;
border:none;
background:#ccc;
cursor:pointer;
}

.dot.active{
background:#b6ff00;
}
.world-section{
background:linear-gradient(90deg,#022c2c,#2e7d32);
color:white;
padding:120px 80px;
text-align:center;
position:relative;
overflow:hidden;
}

.world-section h1{
font-size:48px;
margin-bottom:60px;
}

.world-map{
position:relative;
max-width:1000px;
margin:auto;
}

.world-map img{
width:100%;
opacity:0.25;
}

.location{
position:absolute;
background:white;
color:#1e3a8a;
width:44px;
height:44px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
box-shadow:0 0 12px rgba(255,255,255,0.6);
}

.gb{ top:40%; left:48%; }
.nl{ top:42%; left:52%; }
.mi{ top:45%; left:30%; }
.va{ top:48%; left:33%; }
.ca{ top:50%; left:20%; }
.az{ top:55%; left:22%; }
.au{ bottom:15%; right:8%; }

.world-text{
max-width:500px;
text-align:left;
margin-top:40px;
}
.why-section{
display:flex;
align-items:center;
justify-content:space-between;
padding:100px 80px;
background:#f5f5f5;
gap:60px;
}

.why-left{
flex:1;
}

.why-left h1{
font-size:48px;
margin-bottom:30px;
}

.why-left p{
font-size:18px;
color:#555;
line-height:1.7;
margin-bottom:30px;
}

.why-feature{
margin-bottom:22px;
}

.why-feature h3{
font-size:22px;
margin-bottom:5px;
}

.why-feature p{
font-size:16px;
color:#666;
margin:0;
}

.why-buttons{
margin-top:40px;
display:flex;
gap:20px;
}

.btn-green{
background:#c6ff00;
border:none;
padding:14px 28px;
border-radius:30px;
font-weight:bold;
cursor:pointer;
}

.btn-outline{
border:1px solid #aaa;
padding:14px 28px;
border-radius:30px;
background:white;
cursor:pointer;
}

.why-right{
flex:1;
position:relative;
}

.why-right img{
width:100%;
border-radius:16px;
}

.support-card{
position:absolute;
bottom:40px;
left:40px;
background:rgba(0,0,0,0.65);
color:white;
padding:25px;
border-radius:12px;
width:260px;
}

.support-card h4{
margin-bottom:15px;
}

.support-item{
display:flex;
justify-content:space-between;
margin-bottom:10px;
}

.support-btn{
margin-top:15px;
background:#111;
border:none;
padding:10px;
width:100%;
color:white;
border-radius:6px;
cursor:pointer;
}
.contact-section{
display:flex;
justify-content:space-between;
align-items:flex-start;
padding:120px 80px;
background:linear-gradient(90deg,#052c2c,#274d1c);
color:white;
gap:80px;
}

.contact-left{
flex:1;
}

.contact-left h1{
font-size:60px;
line-height:1.2;
color:#baff00;
}

.toggle{
display:inline-block;
width:70px;
height:35px;
background:#1a2a2a;
border-radius:30px;
margin:0 10px;
position:relative;
}

.toggle::after{
content:"";
width:30px;
height:30px;
background:#baff00;
position:absolute;
top:2px;
left:35px;
border-radius:50%;
box-shadow:0 0 20px #baff00;
}

.contact-form{
flex:1;
background:rgba(255,255,255,0.05);
padding:40px;
border-radius:12px;
display:flex;
flex-direction:column;
}

.contact-form label{
margin-top:15px;
margin-bottom:5px;
}

.contact-form input{
padding:14px;
border-radius:8px;
border:none;
background:#0d2222;
color:white;
}

.submit-btn{
margin-top:30px;
padding:16px;
border:none;
border-radius:40px;
background:white;
color:black;
font-size:16px;
cursor:pointer;
}
.recaptcha-box{
display:flex;
align-items:center;
justify-content:space-between;
background:white;
color:black;
border-radius:6px;
padding:10px 14px;
margin-top:20px;
width:320px;
}

.recaptcha-box input{
margin-right:10px;
}

.recaptcha-right{
text-align:center;
font-size:10px;
}

.recaptcha-right img{
width:32px;
display:block;
margin:auto;
}
@media(max-width:1000px){
.pricing{
grid-template-columns:1fr;
padding:40px;
}
}

`}</style>



      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">

          <p>DEDICATED SERVER HOSTING</p>

          <h1>
            Built for <span className="bold">BOLD</span> <br/>
            ideas and high- <br/>
            traffic moments
          </h1>

          <p>
            Your site stays fast and stable—even when demand spikes.
            With exclusive resources and 24/7 support.
          </p>

          <div className="hero-buttons">
            <div className="hero-buttons">

<button
className="primary"
onClick={() =>
document.getElementById("choose").scrollIntoView({ behavior: "smooth" })
}
>
View plans
</button>

<button
className="outline"
onClick={() =>
document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
}
>
Request a quote
</button>

</div>
          </div>

        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="team"
          />
        </div>
      </section>


      {/* TRUSTED LOGOS */}
      <section className="trusted">

        <p>Trusted by 600,000+ customers for speed, uptime, and peace of mind</p>

        <div className="logos">
          <span>BRIGHTEDGE</span>
          <span>ACTIVISION</span>
          <span>DataMaaS</span>
          <span>RedBull</span>
          <span>FedEx</span>
          <span>AUDI</span>
        </div>

      </section>

      {/* CHOOSE HOSTING */}
      <section section id="choose" className="choose">

        <h1><b>Choose the dedicated hosting that fits your workload</b></h1>

        <div className="tabs">

          <button
            className={activeTab === "managed" ? "active" : ""}
            onClick={() => setActiveTab("managed")}
          >
            Managed Dedicated servers
          </button>

          <button
            className={activeTab === "cloud" ? "active" : ""}
            onClick={() => setActiveTab("cloud")}
          >
            Cloud metal servers
          </button>

          <button
            className={activeTab === "bare" ? "active" : ""}
            onClick={() => setActiveTab("bare")}
          >
            Bare metal servers
          </button>

        </div>

        <p>
         Dedicated physical servers with cloud-style provisioning and scalability.<br />
         Available with optional management for teams that want flexibility without sacrificing performance.
        </p>

        {/* OS BUTTONS */}

        <div className="os-buttons">

          <button
            className={activeOS === "linux" ? "active os-btn" : "os-btn"}
            onClick={() => setActiveOS("linux")}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" alt="linux"/>
            Linux
          </button>

          <button
            className={activeOS === "windows" ? "active os-btn" : "os-btn"}
            onClick={() => setActiveOS("windows")}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/888/888882.png" alt="windows"/>
            Windows
          </button>

        </div>

      </section>
          {/* PRICING SECTION */}

<section  id="pricing" className="pricing" >

<div className="card">
<p className="tag">50% OFF</p>
<h3>Intel Xeon E-2356G</h3>
<h2>$87/mo</h2>

<button className="buy">Buy now</button>

<h4>Resources</h4>

<ul>
<li>6 @ 3.2GHz</li>
<li>32 GB memory</li>
<li>2x 793 GB SSD</li>
<li>10 TB bandwidth</li>
</ul>

<h4>Features</h4>

<ul>
<li>✔ Self Managed</li>
<li>✔ Unlimited sites with InterWorx</li>
<li>✔ Plesk and cPanel available</li>
<li>✔ DDoS protection</li>
<li>✔ Remote management tools</li>
<li>✔ Advanced security</li>
<li>✔ Root access</li>
<li>✔ Dedicated IP address</li>
</ul>
</div>



<div className="card">
<p className="tag">50% OFF</p>
<h3>Intel Xeon E-2356G+</h3>
<h2>$106.50/mo</h2>

<button className="buy">Buy now</button>

<h4>Resources</h4>

<ul>
<li>6 @ 3.2GHz</li>
<li>64 GB memory</li>
<li>2x 793 GB SSD</li>
<li>10 TB bandwidth</li>
</ul>

<h4>Features</h4>

<ul>
<li>✔ Self Managed</li>
<li>✔ Unlimited sites with InterWorx</li>
<li>✔ Plesk and cPanel available</li>
<li>✔ DDoS protection</li>
<li>✔ Remote management tools</li>
<li>✔ Advanced security</li>
<li>✔ Root access</li>
<li>✔ Dedicated IP address</li>
</ul>

</div>


<div className="card popular">

<p className="tag">50% OFF</p>
<p className="popular-label">MOST POPULAR</p>

<h3>Intel Xeon Gold 6226R</h3>
<h2>$210/mo</h2>

<button className="buy">Buy now</button>

<h4>Resources</h4>

<ul>
<li>16 @ 2.9GHz</li>
<li>64 GB memory</li>
<li>1.67 TB SSD</li>
<li>10 TB bandwidth</li>
</ul>
<h4>Features</h4>

<ul>
<li>✔ Self Managed</li>
<li>✔ Unlimited sites with InterWorx</li>
<li>✔ Plesk and cPanel available</li>
<li>✔ DDoS protection</li>
<li>✔ Remote management tools</li>
<li>✔ Advanced security</li>
<li>✔ Root access</li>
<li>✔ Dedicated IP address</li>
</ul>

</div>


<div className="card">
<p className="tag">50% OFF</p>
<h3>Dual Intel Xeon Gold 6226R</h3>
<h2>$266/mo</h2>

<button className="buy">Buy now</button>

<h4>Resources</h4>

<ul>
<li>32 @ 2.9GHz</li>
<li>192 GB memory</li>
<li>3.21 TB SSD</li>
<li>10 TB bandwidth</li>
</ul>
<h4>Features</h4>

<ul>
<li>✔ Self Managed</li>
<li>✔ Unlimited sites with InterWorx</li>
<li>✔ Plesk and cPanel available</li>
<li>✔ DDoS protection</li>
<li>✔ Remote management tools</li>
<li>✔ Advanced security</li>
<li>✔ Root access</li>
<li>✔ Dedicated IP address</li>
</ul>

</div>

</section>
{/* FREEDOM SECTION */}

<section className="focus">

<h1>Freedom to focus on what comes next</h1>

<div className="focus-grid">

<div className="focus-card">
<div className="icon-box">⚡</div>
<h3>Always-fast performance</h3>
<p>
CPU, RAM, and storage that belong to you alone.
No noisy neighbors or slowdowns.
</p>
</div>

<div className="focus-card">
<div className="icon-box">👤</div>
<h3>Expert management options</h3>
<p>
Security patches, monitoring and troubleshooting handled by experts.
</p>
</div>

<div className="focus-card">
<div className="icon-box">$</div>
<h3>Predictable pricing</h3>
<p>
Send as much traffic as you want. No usage spikes or hidden fees.
</p>
</div>
</div>
</section>
<section className="performance"> <h1> Hosting designed for performance<br/> under pressure </h1>
 </section>
<section className="testimonial-section">

<div className="testimonial-card">

{activeTestimonial===0 && (
<>
<div>
<h1>97%</h1>
<p>customer retention rate</p>
<p>A lot of our customers are not very technical, so being able to add another level of management for our customers is huge.</p>
<p>Michael Austin — CEO, XMLA</p>
</div>

<img
className="testimonial-img"
src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
alt=""
/>
</>
)}

{activeTestimonial===1 && (
<>
<div>
<h1>24/7</h1>
<p>protective security monitoring</p>
<p>With Liquid Web’s help, we are able to track down the scripts that were maliciously added to a site.</p>
<p>Craig Tucker — Founder, Tucknologies</p>
</div>

<img
className="testimonial-img"
src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6"
alt=""
/>
</>
)}

{activeTestimonial===2 && (
<>
<div>
<h1>ZERO</h1>
<p>downtime</p>
<p>We need to adapt, develop, and progress or we’ll be left behind.</p>
<p>Ryan Gray — CEO, NameHero</p>
</div>

<img
className="testimonial-img"
src="https://images.unsplash.com/photo-1552664730-d307ca884978"
alt=""
/>
</>
)}

{activeTestimonial===3 && (
<>
<div>
<h1>70%</h1>
<p>increase in traffic</p>
<p>I love the flexibility of Liquid Web. I can upgrade and downgrade whenever I need to.</p>
<p>Kaustubh Katdare — Founder</p>
</div>

<img
className="testimonial-img"
src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
alt=""
/>
</>
)}

</div>

<div className="dots">

<button className={activeTestimonial===0 ? "dot active" : "dot"} onClick={()=>setActiveTestimonial(0)}></button>

<button className={activeTestimonial===1 ? "dot active" : "dot"} onClick={()=>setActiveTestimonial(1)}></button>

<button className={activeTestimonial===2 ? "dot active" : "dot"} onClick={()=>setActiveTestimonial(2)}></button>

<button className={activeTestimonial===3 ? "dot active" : "dot"} onClick={()=>setActiveTestimonial(3)}></button>

</div>

</section>
<section className="world-section">

<h1>
Hosting designed for performance<br/>
under pressure
</h1>

<div className="world-map">

<img
src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
alt="world map"
/>

<div className="location gb">GB</div>
<div className="location nl">NL</div>
<div className="location mi">MI</div>
<div className="location va">VA</div>
<div className="location ca">CA</div>
<div className="location az">AZ</div>
<div className="location au">AU</div>

</div>

<div className="world-text">

<h3>Engineered for always-on performance</h3>

<p>
Our strategically located data centers deliver low latency,
high availability, and multiple layers of redundancy,
so your customers get a fast, stable experience no matter
where they’re coming from.
</p>

</div>

</section>
<section className="why-section">

<div className="why-left">

<h1>Why host with Liquid Web</h1>

<p>
Your website is too important to slow down, crash, or demand constant
babysitting. With Liquid Web, you get high-performance dedicated
servers and a fully managed environment backed by human experts
around the clock.
</p>

<div className="why-feature">
<h3>↑↓ 99.99% uptime guarantee</h3>
<p>Consistent uptime that keeps your business moving</p>
</div>

<div className="why-feature">
<h3>🛡 Security and compliance built in</h3>
<p>PCI-ready environments and ongoing hardening</p>
</div>

<div className="why-feature">
<h3>👨‍💻 24/7 human support</h3>
<p>Access to seasoned experts whenever you need them</p>
</div>

<div className="why-feature">
<h3>⚙ Hassle-free migrations</h3>
<p>Expert-managed moves from start to finish</p>
</div>

<div className="why-buttons">
<button
className="btn-green"
onClick={() =>
document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })
}
>
View plans
</button>
<button
className="btn-outline"
onClick={() =>
document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
}
>
Request a quote
</button> 

</div>

</div>


<div className="why-right">

<img
src="https://images.unsplash.com/photo-1551434678-e076c223a692"
alt="support"
/>

<div className="support-card">

<h4>Support snapshot</h4>

<div className="support-item">
<span>Specialist joined</span>
<span>2m 12s</span>
</div>

<div className="support-item">
<span>Issue resolved</span>
<span>11m 04s</span>
</div>

<div className="support-item">
<span>Avg 24/7 response</span>
<span>&lt; 3 min</span>
</div>

<button className="support-btn">View support log</button>

</div>

</div>

</section>
{/* CONTACT SECTION */}

<section  id="contact" className="contact-section">

<div className="contact-left">

<h1>
Turn on 
<span className="toggle"></span>
the right dedicated solution
</h1>

</div>


<div className="contact-form">

<label>First Name*</label>
<input type="text" />

<label>Last Name*</label>
<input type="text" />

<label>Email*</label>
<input type="email" />

<label>Phone Number</label>
<input type="text" />

<label>Company</label>
<input type="text" />
<div className="recaptcha-box">
  <input type="checkbox" />
  <span>I'm not a robot</span>

  <div className="recaptcha-right">
    <img
      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
      alt="recaptcha"
    />
    <p>reCAPTCHA</p>
    <small>Privacy · Terms</small>
  </div>
</div>
<button className="submit-btn">Submit</button>

</div>

</section>
    </>
  );
}

export default BaremetalHosting; 