import React ,{useState}from 'react'
export default function Login() {

    const [isSignedUp,setIsSignedUp] = useState(false);
    const [buttonText,setButtonText] = useState(false);

    const setStatus = () =>{
        setIsSignedUp(!isSignedUp);
        setButtonText(!buttonText);
    }
    return (
        <div>
            <section class="banner-area organic-breadcrumb">
		        <div class="container">
			        <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				        <div class="col-first">
					        <h1>Login / SignUp</h1>
				        </div>
			        </div>
		        </div>
	        </section>
            <section class="login_box_area section_gap">
		        <div class="container">
			        <div class="row">
				        <div class="col-lg-6">
					        <div class="login_box_img">
						        <img class="img-fluid" src="img/login.jpg" alt=""/>
						        <div class="hover">
                                    {
                                        !buttonText? (
                                            <div className="animated fadeInUp">
                                                <h4>Start your day</h4>
                                                <p>More amazing and tremendous products to buy</p>
                                                <button class="primary-btn" onClick={setStatus}>
                                                    Login
                                                </button>
                                            </div>
                                        ):(
                                            <div className='animated fadeIn'>
                                                <h4>New to our website?</h4>
                                                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                                <button class="primary-btn" onClick={setStatus}>
                                                    Sign Up
                                                </button>
                                            </div>
                                        )
                                    }
						        </div>
					        </div>
				        </div>
                        {
                            isSignedUp? <LoginForm/>:<SignupForm/>
                        }
			        </div>
		        </div>
	        </section>
        </div>
    )
}

function SignupForm() {
    return (
    <div class="col-lg-6">
		 <div class="login_form_inner">
			<div className='animated fadeIn'><h3>Signup to be a part</h3></div>
			<form class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
				<div class="col-md-12 form-group">
					<input type="text" class="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'"/>
				</div>
				<div class="col-md-12 form-group">
					<input type="text" class="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"/>
				</div>
				<div class="col-md-12 form-group">
					<div class="creat_account">
					</div>
				</div>
				<div class="col-md-12 form-group animated fadeIn">
					<button type="submit" value="submit" class="primary-btn">Sign Up</button>
				</div>
			</form>
		</div>
	</div>
    )
}
function LoginForm() {
    return (
    <div class="col-lg-6">
		 <div class="login_form_inner">
			<div className='animated fadeIn'><h3>Login to enter</h3></div>
			<form class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
				<div class="col-md-12 form-group">
					<input type="text" class="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'"/>
				</div>
				<div class="col-md-12 form-group">
					<input type="text" class="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"/>
				</div>
				<div class="col-md-12 form-group">
					<div class="creat_account animated fadeIn ">
						<input type="checkbox" id="f-option2" name="selector"/>
						<label for="f-option2">Keep me logged in</label>
					</div>
				</div>
				<div class="col-md-12 form-group animated fadeIn">
					<button type="submit" value="submit" class="primary-btn">Log In</button>
					<a href="#">Forgot Password?</a>
				</div>
			</form>
		</div>
	</div>
    )
}

