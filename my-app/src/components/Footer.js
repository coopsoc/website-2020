import React from 'react';

function Footer() {

  return (
    <>
        <section class="contact-section bg-black">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Contact Us</h2>
                    </div>
                </div>
            
                <div class="row">
                    <div class="col-sm-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-facebook-square text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Facebook</h4>
                                <hr class="my-4"></hr>
                                <div class="small text-black-50">
                                    <a href="https://www.facebook.com/coopsoc.unsw/">UNSW Co-op Society</a> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4"></hr>
                                <div class="small text-black-50">
                                    coopsoc.unsw@gmail.com 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-linkedin-in text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">LinkedIn</h4>
                                <hr class="my-4"></hr>
                                <div class="small text-black-50">
                                    <a href="https://www.linkedin.com/company/unsw-co-op-society">UNSW Co-op Society</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-black small text-center text-white-50">
            <div class="container">
                Copyright &copy; UNSW Co-op Society
            </div>
        </footer>
    </>
  );
}

export default Footer;