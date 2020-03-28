import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function BuildHistory() {
    return (
        <div className="Page Page_font_yandex">
            <Header history={true} />

            <main className="Main">
                <div className="Container">
                    <ul className="BuildList font_size_s">
                        <li className="BuildCard Build-Item Build_status_success">
                            <div className="Build-Icon"></div>
                            <div className="Build-Details Build-Details_align_compact">
                                <div className="Build-Info">
                                    <div className="Build-Title">
                                        <div className="Build-Id font_size_xl">1368</div>
                                        <div className="Build-Caption font_size_m">add documentation for postgres scaler</div>
                                    </div>
                                    <div className="Commit">
                                        <div className="Commit-Info Build-Items_align_horizontal">
                                            <i className="Icon_type_branch"></i>
                                            <div className="Commit-Branch">master</div>
                                            <div className="Commit-Hash Build_text_secondary">9c9f0b9</div>
                                        </div>
                                        <div className="Commit-Author Build-Items_align_horizontal">
                                            <i className="Icon_type_author"></i>
                                            <div className="Commit-AuthorName">Philip Kirkorov</div>
                                        </div>
                                    </div>                             
                                </div> 
                                <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
                                    <div className="TimeInfo-DateTime TimeInfo_align_line">
                                        <i className="Icon_type_calendar"></i>
                                        <div>21 янв, <time>03:06</time></div>
                                    </div>
                                    <div className="TimeInfo-Duration TimeInfo_align_line">
                                        <div className="Icon_type_clock"></div>
                                        <div>1 ч 20 мин</div>
                                    </div>
                                </div>
                            </div> 
                        </li>

                        <li className="BuildCard Build-Item Build_status_failed">
                            <div className="Build-Icon"></div>
                            <div className="Build-Details Build-Details_align_compact">
                                <div className="Build-Info">
                                    <div className="Build-Title">
                                        <div className="Build-Id font_size_xl">1367</div>
                                        <div className="Build-Caption font_size_m">Super cool UI kit for making websites that look like games</div>
                                    </div>
                                    <div className="Commit">
                                        <div className="Commit-Info Build-Items_align_horizontal">
                                            <i className="Icon_type_branch"></i>
                                            <div className="Commit-Branch">super-cool-ui-kit</div>
                                            <div className="Commit-Hash Build_text_secondary">952e5567</div>
                                        </div>
                                        <div className="Commit-Author Build-Items_align_horizontal">
                                            <i className="Icon_type_author"></i>
                                            <div className="Commit-AuthorName">Vadim Makeev</div>
                                        </div>
                                    </div>                             
                                </div> 
                                <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
                                    <div className="TimeInfo-DateTime TimeInfo_align_line">
                                        <i className="Icon_type_calendar"></i>
                                        <div>21 янв, <time>03:06</time></div>
                                    </div>
                                    <div className="TimeInfo-Duration TimeInfo_align_line">
                                        <div className="Icon_type_clock"></div>
                                        <div>1 ч 20 мин</div>
                                    </div>
                                </div>
                            </div> 
                        </li>

                        <li className="BuildCard Build-Item Build_status_success">
                            <div className="Build-Icon"></div>
                            <div className="Build-Details Build-Details_align_compact">
                                <div className="Build-Info">
                                    <div className="Build-Title">
                                        <div className="Build-Id font_size_xl">1366</div>
                                        <div className="Build-Caption font_size_m">Merge branch &apos;master&apos; of github.com:jaywcjlove/awesome</div>
                                    </div>
                                    <div className="Commit">
                                        <div className="Commit-Info Build-Items_align_horizontal">
                                            <i className="Icon_type_branch"></i>
                                            <div className="Commit-Branch">master</div>
                                            <div className="Commit-Hash Build_text_secondary">b4636ab</div>
                                        </div>
                                        <div className="Commit-Author Build-Items_align_horizontal">
                                            <i className="Icon_type_author"></i>
                                            <div className="Commit-AuthorName">Philip Kirkorov</div>
                                        </div>
                                    </div>                             
                                </div> 
                                <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
                                    <div className="TimeInfo-DateTime TimeInfo_align_line">
                                        <i className="Icon_type_calendar"></i>
                                        <div>21 янв, <time>03:06</time></div>
                                    </div>
                                    <div className="TimeInfo-Duration TimeInfo_align_line">
                                        <div className="Icon_type_clock"></div>
                                        <div>1 ч 20 мин</div>
                                    </div>
                                </div>
                            </div> 
                        </li>

                        <li className="BuildCard Build-Item Build_status_inProgress">
                            <div className="Build-Icon"></div>
                            <div className="Build-Details Build-Details_align_compact">
                                <div className="Build-Info">
                                    <div className="Build-Title">
                                        <div className="Build-Id font_size_xl">1365</div>
                                        <div className="Build-Caption font_size_m">upgrade typescript to 3.8</div>
                                    </div>
                                    <div className="Commit">
                                        <div className="Commit-Info Build-Items_align_horizontal">
                                            <i className="Icon_type_branch"></i>
                                            <div className="Commit-Branch">master</div>
                                            <div className="Commit-Hash Build_text_secondary">b4636ab</div>
                                        </div>
                                        <div className="Commit-Author Build-Items_align_horizontal">
                                            <i className="Icon_type_author"></i>
                                            <div className="Commit-AuthorName">Philip Kirkorov</div>
                                        </div>
                                    </div>                             
                                </div> 
                                <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
                                    <div className="TimeInfo-DateTime TimeInfo_align_line">
                                        <i className="Icon_type_calendar"></i>
                                        <div>21 янв, <time>03:06</time></div>
                                    </div>
                                    <div className="TimeInfo-Duration TimeInfo_align_line">
                                        <div className="Icon_type_clock"></div>
                                        <div>1 ч 20 мин</div>
                                    </div>
                                </div>
                            </div> 
                        </li>

                        <li className="BuildCard Build-Item Build_status_success">
                            <div className="Build-Icon"></div>
                            <div className="Build-Details Build-Details_align_compact">
                                <div className="Build-Info">
                                    <div className="Build-Title">
                                        <div className="Build-Id font_size_xl">1364</div>
                                        <div className="Build-Caption font_size_m">add documentation for postgres scaler</div>
                                    </div>
                                    <div className="Commit">
                                        <div className="Commit-Info Build-Items_align_horizontal">
                                            <i className="Icon_type_branch"></i>
                                            <div className="Commit-Branch">master</div>
                                            <div className="Commit-Hash Build_text_secondary">b4636ab</div>
                                        </div>
                                        <div className="Commit-Author Build-Items_align_horizontal">
                                            <i className="Icon_type_author"></i>
                                            <div className="Commit-AuthorName">Philip Kirkorov</div>
                                        </div>
                                    </div>                             
                                </div> 
                                <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
                                    <div className="TimeInfo-DateTime TimeInfo_align_line">
                                        <i className="Icon_type_calendar"></i>
                                        <div>21 янв, <time>03:06</time></div>
                                    </div>
                                    <div className="TimeInfo-Duration TimeInfo_align_line">
                                        <div className="Icon_type_clock"></div>
                                        <div>1 ч 20 мин</div>
                                    </div>
                                </div>
                            </div> 
                        </li>

                        <li className="BuildCard Build-Item Build_status_failed">
                            <div className="Build-Icon"></div>
                            <div className="Build-Details Build-Details_align_compact">
                                <div className="Build-Info">
                                    <div className="Build-Title">
                                        <div className="Build-Id font_size_xl">1367</div>
                                        <div className="Build-Caption font_size_m">replace all `div` to `article`</div>
                                    </div>
                                    <div className="Commit">
                                        <div className="Commit-Info Build-Items_align_horizontal">
                                            <i className="Icon_type_branch"></i>
                                            <div className="Commit-Branch">master</div>
                                            <div className="Commit-Hash Build_text_secondary">952e5567</div>
                                        </div>
                                        <div className="Commit-Author Build-Items_align_horizontal">
                                            <i className="Icon_type_author"></i>
                                            <div className="Commit-AuthorName">Vadim Makeev</div>
                                        </div>
                                    </div>                             
                                </div> 
                                <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
                                    <div className="TimeInfo-DateTime TimeInfo_align_line">
                                        <i className="Icon_type_calendar"></i>
                                        <div>21 янв, <time>03:06</time></div>
                                    </div>
                                    <div className="TimeInfo-Duration TimeInfo_align_line">
                                        <div className="Icon_type_clock"></div>
                                        <div>1 ч 20 мин</div>
                                    </div>
                                </div>
                            </div> 
                        </li>

                        <li className="BuildCard Build-Item Build_status_success">
                            <div className="Build-Icon"></div>
                            <div className="Build-Details Build-Details_align_compact">
                                <div className="Build-Info">
                                    <div className="Build-Title">
                                        <div className="Build-Id font_size_xl">1362</div>
                                        <div className="Build-Caption font_size_m">improved accessibility</div>
                                    </div>
                                    <div className="Commit">
                                        <div className="Commit-Info Build-Items_align_horizontal">
                                            <i className="Icon_type_branch"></i>
                                            <div className="Commit-Branch">master</div>
                                            <div className="Commit-Hash Build_text_secondary">e41e4cc</div>
                                        </div>
                                        <div className="Commit-Author Build-Items_align_horizontal">
                                            <i className="Icon_type_author"></i>
                                            <div className="Commit-AuthorName">Philip Kirkorov</div>
                                        </div>
                                    </div> 
                                </div> 
                                <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
                                    <div className="TimeInfo-DateTime TimeInfo_align_line">
                                        <i className="Icon_type_calendar"></i>
                                        <div>21 янв, <time>03:06</time></div>
                                    </div>
                                    <div className="TimeInfo-Duration TimeInfo_align_line">
                                        <div className="Icon_type_clock"></div>
                                        <div>1 ч 20 мин</div>
                                    </div>
                                </div>
                            </div> 
                        </li>

                        <li className="BuildCard Build-Item Build_status_success">
                            <div className="Build-Icon"></div>
                            <div className="Build-Details Build-Details_align_compact">
                                <div className="Build-Info">
                                    <div className="Build-Title">
                                        <div className="Build-Id font_size_xl">1350</div>
                                        <div className="Build-Caption font_size_m">fix: upload 别片类型</div>
                                    </div>
                                    <div className="Commit">
                                        <div className="Commit-Info Build-Items_align_horizontal">
                                            <i className="Icon_type_branch"></i>
                                            <div className="Commit-Branch">master</div>
                                            <div className="Commit-Hash Build_text_secondary">e41e4cc</div>
                                        </div>
                                        <div className="Commit-Author Build-Items_align_horizontal">
                                            <i className="Icon_type_author"></i>
                                            <div className="Commit-AuthorName">Philip Kirkorov</div>
                                        </div>
                                    </div> 
                                </div> 
                                <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
                                    <div className="TimeInfo-DateTime TimeInfo_align_line">
                                        <i className="Icon_type_calendar"></i>
                                        <div>21 янв, <time>03:06</time></div>
                                    </div>
                                    <div className="TimeInfo-Duration TimeInfo_align_line">
                                        <div className="Icon_type_clock"></div>
                                        <div>1 ч 20 мин</div>
                                    </div>
                                </div>
                            </div> 
                        </li>

                        <li className="BuildCard Build-Item Build_status_success">
                            <div className="Build-Icon"></div>
                            <div className="Build-Details Build-Details_align_compact">
                                <div className="Build-Info">
                                    <div className="Build-Title">
                                        <div className="Build-Id font_size_xl">1349</div>
                                        <div className="Build-Caption font_size_m">Form item has default height align with form size</div>
                                    </div>
                                    <div className="Commit">
                                        <div className="Commit-Info Build-Items_align_horizontal">
                                            <i className="Icon_type_branch"></i>
                                            <div className="Commit-Branch">master</div>
                                            <div className="Commit-Hash Build_text_secondary">e41e4cc</div>
                                        </div>
                                        <div className="Commit-Author Build-Items_align_horizontal">
                                            <i className="Icon_type_author"></i>
                                            <div className="Commit-AuthorName">Philip Kirkorov</div>
                                        </div>
                                    </div> 
                                </div> 
                                <div className="TimeInfo Build_text_secondary TimeInfo_align_aside">
                                    <div className="TimeInfo-DateTime TimeInfo_align_line">
                                        <i className="Icon_type_calendar"></i>
                                        <div>21 янв, <time>03:06</time></div>
                                    </div>
                                    <div className="TimeInfo-Duration TimeInfo_align_line">
                                        <div className="Icon_type_clock"></div>
                                        <div>1 ч 20 мин</div>
                                    </div>
                                </div>
                            </div> 
                        </li>
                        
                    </ul>

                    <button className="Button Button_color_secondary Button_size_mixSM font_size_s">Show more</button>
                </div>
            </main>

            <Footer />    
        </div>
    );
}