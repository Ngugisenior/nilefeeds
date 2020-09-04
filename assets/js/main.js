//var Airtable = require('airtable');
//var base = new Airtable({apiKey: 'keyuOaEMS1bxTdQ7r'}).base('appx3L5FZ6Dl9UjZK');
document.getElementById('market').addEventListener('click', marketplace);
document.getElementById('social').addEventListener('click', social);
document.getElementById('team').addEventListener('click', team);


function marketplace(){
    let main = document.getElementById('container');
    main.innerHTML=`
    <h1 class="mktplc">Marketplace</h1>
    <div class="market-place">
        <div class="product-group">
            <div class="product">
                <h1>Kidney Beans</h1>
                <p>Kidney beans are mainly composed of carbs and fiber but also serve as a good source of protein.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/PryxM3bh/rsz-green-valley-red-kidney-beans-bowl-1069x1100.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
        <div class="product-group">
            <div class="product">
                <h1>Green Grams</h1>
                <p>Also known as mung beans, a green gram is small in size and round in shape. They can be consumed as a legume or sprouted, both ways it is very nutritional and high in fibre.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/J4h7Bc1k/green.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
    </div>

    <div class="market-place">
        <div class="product-group">
            <div class="product">
                <h1>Soy Beans</h1>
                <p>Soybeans are mainly composed of protein but also contain good amounts of carbs and fat. Soybeans are among the best sources of plant-based protein.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/VsJstq4Z/soy-beans-large.jpg" loading="lazy" alt="Soy Beans">
                </div>
            </div>
        </div>
        <div class="product-group">
            <div class="product">
                <h1>White Corn</h1>
                <p>White Corn provides numerous health benefits due to the presence of quality nutrients within. Besides being a delicious addition to any meal, it is rich in phytochemicals and offers protection against a number of long-lasting diseases. </p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/qMrv8X20/73406A.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
    </div>

    <div class="market-place">
        <div class="product-group">
            <div class="product">
                <h1>Millet</h1>
                <p>Millet is a cereal grain that belongs to the Poaceae family, commonly known as the grass family. Millet’s nutritional profile is similar to that of sorghum and other cereals. It has gained popularity because it’s gluten-free and boasts high protein, fiber, and antioxidant contents.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/2ysjJhKd/c9a52725-f9f9-4bd2-8334-27a9fb8d6818.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
        <div class="product-group">
            <div class="product">
                <h1>Yellow Green Beans</h1>
                <p>Yellow Beans is commonly found in Africa countries, the bean is tasty and does not give gas.  While greatly lacking in color when cooked the bean is an increasing great meat supplement in domestic household consumption.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/JztmqyFp/IMG-20191211-153448-3-1576077311403-600x600.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
    </div>

    <div class="market-place">
        <div class="product-group">
            <div class="product">
                <h1>Cranberry Beans<br>(Rose coco)</h1>
                <p>Beans are seeds from the Fabaceae family, commonly known as the legume, pea, or bean family. They are an affordable source of protein, fiber, iron, and vitamins that offer many health benefits.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/8CWJPnTQ/4-1024x986.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
        <div class="product-group">
            <div class="product">
                <h1>Nyayo Beans</h1>
                <p>Also known as mung beans, a green gram is small in size and round in shape. They can be consumed as a legume or sprouted, both ways it is very nutritional and high in fibre.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/fLRVjWxZ/Nyayo-Beans-1.png" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
    </div>

    <div class="market-place">
        <div class="product-group">
            <div class="product">
                <h1>Wheat Pollard</h1>
                <p>Pollard is  fine protein rich feed supplement for farm animals. It is a by product from the milling of wheat for flour. It also called short.Wheat pollard is a by-product of the flour milling of grain.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/XNhgJtbX/Wheat-pollard.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
        <div class="product-group">
            <div class="product">
                <h1>Palm Kennel Cake</h1>
                <p>Palm kernel meal is the main by-product of the palm kernel oil extraction process. It is a highly fibrous and medium grade protein feed, hence most suited to ruminant or rabbit feeding. Most of the palm kernel meal production goes to animal feeding.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/zXjLPPk0/UTB82-Gi-BAar-FXKJk43-Ovq6ybnp-Xa3.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
    </div>

    <div class="market-place">
        <div class="product-group">
            <div class="product">
                <h1>Sesame Seeds</h1>
                <p>Sesame seeds are an excellent source of copper, a very good source of manganese, and a good source of magnesium, calcium, phosphorus, iron, zinc, molybdenum, and selenium. </p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/YSPP1HDV/8002-sesame-seeds-are-more-common-serious-732x549-thumbnail.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
        <div class="product-group">
            <div class="product">
                <h1>Wheat Bran</h1>
                <p>Protein, minerals, oil and fibre are mainly found in the outer layers of the grain, and wheat bran is richer in these nutrients than the whole grain. Wheat bran is relatively rich in protein and minerals, notably calcium (0.07-0.2% DM) and phosphorus. Its oil content is higher than that of the whole grain.</p>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/TPHPgK66/wheat-bran-animal-feed-459927.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
    </div>
    `;

}

function social(){
    document.getElementById('container').innerHTML=`
    <h1 class="mktplc">Be Social</h1>
    <div class="market-place">
        <div class="product-group contact">
            <div class="wrapper">
		        <div class="contact__container">
				    <div class="contact__title">
				        <h2>Contact us<hr></h2>
				    </div>
				    <form class="contact__form">
						<p>Name</p>
						<input id="name" class="contact__form-input" type="text">

						<p>Email</p>
						<input id="email" class="contact__form-input" type="text">

						<p>Message</p>
						<textarea id="message" class="contact__form-textarea" type="text"></textarea>

						<input id="submit-message" type="submit" value="Send message" onClick="sendMessage()">
				    </form>
		        </div>
            </div>
        </div>
        <div class="product-group">
            <div class="product">
                <h1>Contact</h1>
                <div class="contact-card">
                    <section>
                        <h4>Email</h4>
                        <p>info@nilefeeds.com</p>
                    </section>
                    <section>
                        <h4>Phone</h4>
                        <p>(254) 720 982590</p>
                    </section>
                </div>
                <div class="contact-card">
                    <h1>Location</h1>
                    <p>Busia, 7200</p>
                    <p>Kenya</p>
                </div>
            </div>
            <div class="product-b">
                <div class="product-image">
                    <img src="https://i.postimg.cc/J4h7Bc1k/green.jpg" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
    </div>
    `;
}

function team(){
    let main = document.getElementById('container');
    main.innerHTML=`
    <h1 class="mktplc">Team</h1>
    <div class="market-place">
        <div class="product-team">
            <div class="team">
                <h3>Simon Ngugi</h3>
                <p>Managing Director</p>
                <pre><a href="mailto:jmuiruri@nilefeeds.com"><var>simon@nilefeeds.com</var></a></pre>
            </div>
            <div class="product-b">
                <div class="team-image">
                    <img src="https://i.postimg.cc/DZbYWkBg/download.png" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>

        <div class="product-team">
            <div class="team">
                <h3>Joseph Muiruri</h3>
                <p>Web Developer</p>
                <pre><a href="mailto:jmuiruri@nilefeeds.com"><var>jmuiruri@nilefeeds.com</var></a></pre>
            </div>
            <div class="product-b">
                <div class="team-image">
                    <img src="https://i.postimg.cc/7P2FBcS7/jsp-removebg-preview.png" loading="lazy" alt="Beans">
                </div>
            </div>
        </div>
    </div>`;
}


function sendMessage(){
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let message = document.getElementById('message')
    if(name.value != 0 && email.value !=0){
        console.log("!");
    }

}

