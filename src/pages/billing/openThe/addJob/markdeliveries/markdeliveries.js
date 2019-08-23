import React, { Component } from 'react';

class markdeliveries extends Component {
    render() {
        return (
            
              <div className= "padding-30">
                    <table className="basic" bgcolor="#000000"><tbody><tr className="tyootsikot"><td width="25%" height={39} style={{cursor: 'pointer'}} bgcolor="#525252" onclick=" if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=1&job_id=60'"><div align="center">Asiakastiedot</div></td><td width="25%" bgcolor="#525252" style={{cursor: 'pointer'}} onclick=" if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=2&job_id=60'"><div align="center">Työn lisäys / työn tietojen muokkaus</div></td><td width="25%" bgcolor="#FF7D00" style={{cursor: 'pointer', color: '#000000'}} onclick=" if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=3&job_id=60'"><div align="center">Työt</div></td>
                          <td width="25%" bgcolor="#525252" style={{cursor: 'pointer'}} onclick=" if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=4&job_id=60'"><div align="center">Laskutus</div></td></tr>
                        <tr bgcolor="#FFFFFF">
                          <td colSpan={4}>
                            <table width="100%" border={0} className="workk">
                              <tbody><tr>
                                  <td><div align="center">        <link type="text/css" rel="stylesheet" href="css/cal.css" />
                                      <style type="text/css" dangerouslySetInnerHTML={{__html: "table.workk input:focus, table.workk select:focus, table.workk textarea:focus { background-color:#EDF2DF; }" }} />
                                      <style dangerouslySetInnerHTML={{__html: "#ui-datepicker-div {\tbackground-color: #DADADA; }" }} />
                                      <table className="basic"><tbody><tr><td className="blue"><h3 align="center">Töiden toimitukset:</h3></td></tr></tbody></table></div></td>
                                </tr>
                              </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                      </div>
                  
        );
    }
}

export default markdeliveries;