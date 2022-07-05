import React from "react";

export default function ContactPreview() {
  return (
    <>
      {/*<!-- Start Contact (((((Change below to full width))))-->*/}
      <section className="contact-sec" id="contact">
        <div className="container expand-container">
          <div className="row align-items-center col-lg-12">
            <div className="col-12 col-lg-5 wow fadeIn" data-wow-delay=".2s">
              <div className="heading-area">
                <h4 className="heading">
                  Questions? <span className="d-block"> Get in Touch</span>
                </h4>
              </div>
              <div className="contact-details">
                <ul>
                  <li>
                    <i aria-hidden="true" className="las la-paper-plane"></i>
                    Info@brandinstitute.com
                  </li>
                  <li>
                    <i aria-hidden="true" className="las la-phone"></i>
                    <span>+1 305 374 2500</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-7 wow fadeIn" data-wow-delay=".2s">
              <form
                className="row contact-form row-padding"
                id="contact-form-data"
              >
                <div className="col-12 col-lg-10" id="result"></div>
                <div className="col-12 col-lg-6">
                  <input
                    type="text"
                    name="userName"
                    placeholder="Full Name*"
                    className="form-control"
                  />
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="E-mail*"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="userPhone"
                    placeholder="Phone"
                    className="form-control"
                  />
                  <p className="contacttext">State</p>
                  <select defaultValue="selected">
                    <optgroup label="State">
                      <option value="selected" disabled>
                        (Choose One)
                      </option>
                      <option value="outsideus">Outside of U.S. </option>
                      <option value="Alabama">Alabama </option>
                      <option value="Alaska">Alaska </option>
                      <option value="Arkansas">Arkansas </option>
                      <option value="Arizona">Arizona </option>
                      <option value="California">California </option>
                      <option value="Colorado">Colorado </option>
                      <option value="Connecticut">Connecticut </option>
                      <option value="Canal Zone">Canal Zone </option>
                      <option value="District Of Columbia">
                        District Of Columbia 
                      </option>
                      <option value="Delaware">Delaware </option>
                      <option value="Florida">Florida </option>
                      <option value="Georgia">Georgia </option>
                      <option value="Guam">Guam </option>
                      <option value="Hawaii">Hawaii </option>
                      <option value="Iowa">Iowa </option>
                      <option value="Idaho">Idaho </option>
                      <option value="Illinois">Illinois </option>
                      <option value="Indiana">Indiana </option>
                      <option value="Kansas">Kansas </option>
                      <option value="Kentucky">Kentucky </option>
                      <option value="Louisiana">Louisiana </option>
                      <option value="Massachusetts">Massachusetts </option>
                      <option value="Maryland">Maryland </option>
                      <option value="Maine">Maine </option>
                      <option value="Michigan">Michigan </option>
                      <option value="Minnesota">Minnesota </option>
                      <option value="Missouri">Missouri </option>
                      <option value="Mississippi">Mississippi </option>
                      <option value="Montana">Montana </option>
                      <option value="Nebraska">Nebraska </option>
                      <option value="Nevada">Nevada </option>
                      <option value="New Hampshire">New Hampshire </option>
                      <option value="New Jersey">New Jersey </option>
                      <option value="New Mexico">New Mexico </option>
                      <option value="New York">New York </option>
                      <option value="North Carolina">North Carolina </option>
                      <option value="North Dakota">North Dakota </option>
                      <option value="Ohio">Ohio </option>
                      <option value="Oklahoma">Oklahoma </option>
                      <option value="Oregon">Oregon </option>
                      <option value="Pennsylvania">Pennsylvania </option>
                      <option value="Puerto Rico">Puerto Rico </option>
                      <option value="Rhode Island">Rhode Island </option>
                      <option value="South Carolina">South Carolina </option>
                      <option value="South Dakota">South Dakota </option>
                      <option value="Tennessee">Tennessee </option>
                      <option value="Texas">Texas </option>
                      <option value="Utah">Utah </option>
                      <option value="Virginia">Virginia </option>
                      <option value="Virgin Island">Virgin Island </option>
                      <option value="Vermont">Vermont </option>
                      <option value="Washington">Washington </option>
                      <option value="Wisconsin">Wisconsin </option>
                      <option value="West Virginia">West Virginia </option>
                      <option value="Wyoming">Wyoming </option>
                      <option value="Alberta">Alberta </option>
                      <option value="British Columbia">
                        British Columbia 
                      </option>
                      <option value="Manitoba">Manitoba </option>
                      <option value="New Brunswick">New Brunswick </option>
                      <option value="New Foundland">New Foundland </option>
                      <option value="Nova Scotia">Nova Scotia </option>
                      <option value="Northwest Territories">
                        Northwest Territories 
                      </option>
                      <option value="Ontario">Ontario </option>
                      <option value="Prince Edward Island">
                        Prince Edward Island 
                      </option>
                      <option value="Quebec">Quebec </option>
                      <option value="Saskatchewan">Saskatchewan </option>
                      <option value="Yukon Territory">Yukon Territory </option>
                    </optgroup>
                  </select>

                  <p className="contacttext">Country</p>
                  <select name="Country" defaultValue="United States">
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D Ivoire (Ivory Coast)">
                      Cote D Ivoire (Ivory Coast)
                    </option>
                    <option value="Croatia (Hrvatska)">
                      Croatia (Hrvatska)
                    </option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curacao">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Federated States of Micronesia">
                      Federated States of Micronesia
                    </option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard and McDonald Islands">
                      Heard and McDonald Islands
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea (North)">Korea (North)</option>
                    <option value="Korea (South)">Korea (South)</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">Macedonia</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand (Aotearoa)">
                      New Zealand (Aotearoa)
                    </option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="S. Georgia and S. Sandwich Isls.">
                      S. Georgia and S. Sandwich Isls.
                    </option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovak Republic">Slovak Republic</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="St. Helena">St. Helena</option>
                    <option value="St. Pierre and Miquelon">
                      St. Pierre and Miquelon
                    </option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen Islands">
                      Svalbard and Jan Mayen Islands
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City (Holy See)">
                      Vatican City (Holy See)
                    </option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands (British)">
                      Virgin Islands (British)
                    </option>
                    <option value="Wallis and Futuna Islands">
                      Wallis and Futuna Islands
                    </option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zaire">Zaire</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
                <div className="col-12 col-lg-5">
                  <p className="contacttext">Service and inquires</p>
                  <select name="Services" defaultValue="selected">
                    <option value="selected" disabled>
                      (Choose One)
                    </option>
                    <option value="lead">Brand Strategy / Architecture</option>
                    <option value="lead">Name Development</option>
                    <option value="lead">Market Research</option>
                    <option value="lead">Regulatory</option>
                    <option value="lead">Design</option>
                    <option value="brequest">Request Brochure</option>
                    <option value="academic">
                      Academic &amp; Employment Questions
                    </option>
                    <option value="payment">
                      Online Market Research Payment Questions
                    </option>
                    <option value="website">Technical Issues</option>
                    <option value="comment">Comments</option>
                    <option value="question">Other Questions</option>
                  </select>
                  <p className="contacttext">How did you hear about us?</p>
                  {/*Need to add this below in Hear ---  onChange={showHide}*/}
                  <select name="Hear" id="hear" defaultValue="selected">
                    <option value="selected" disabled>
                      (Choose One)
                    </option>
                    <option value="Search-Engine">
                      Search engine results (Google, Yahoo, etc.) / Internet
                      Advertisement
                    </option>
                    <option value="Recommended">
                      Recommended by friend or colleague
                    </option>
                    <option value="social">
                      Social Media (LinkedIn, Facebook, etc.)
                    </option>
                    <option value="Blog">Blog or Publication</option>
                    <option value="email">Email</option>
                    <option value="Trade Conference">Trade Conference</option>
                    <option value="Other">Other</option>
                  </select>
                  <div
                    name="hidden-panel"
                    id="hidden-panel"
                    style={{ display: "none" }}
                  >
                    <input type="text" name="Other" id="hidden-panel" />
                  </div>

                  <div
                    className="g-recaptcha"
                    data-sitekey="6Lf1eBAUAAAAALgzpcgzSpBtRwZRF4GzHloJF_zV"
                  ></div>
                  <textarea
                    className="form-control"
                    name="userMessage"
                    rows="6"
                    placeholder="Type Your Message Here"
                  ></textarea>
                  <a
                    href="#/"
                    onClick={(ev) => {
                      ev.preventDefault();
                      this.props.onClick(ev);
                      return false;
                    }}
                    className="btn btn-medium btn-rounded btn-trans rounded-pill w-100 contact_btn main-font"
                  >
                    Submit Information
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Contact -->*/}
    </>
  );
}
