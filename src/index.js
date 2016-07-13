`
<div class="rs_dialog_content" style="width: auto;">
    <h1>Repeat <a href="#" title="Cancel" alt="Cancel"></a></h1>
    <table>
        <tbody>
            <tr>
                <th> Frequency: </th>
                <td>
                    <select id="rs_frequency" class="rs_frequency" name="rs_frequency">
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </td>
            </tr>
        </tbody>
        <tbody class="daily_options freq_option_section" style="display: none;">
            <tr>
                <th> Every: </th>
                <td>
                    <input type="text" name="rs_daily_interval" class="rs_daily_interval rs_interval" value="1" size="2"> day(s)
                </td>
            </tr>
        </tbody>
        <tbody class="weekly_options freq_option_section" style="display: table-row-group;">
            <tr>
                <th> Every: </th>
                <td>
                    <input type="text" name="rs_weekly_interval" class="rs_weekly_interval rs_interval" value="1" size="2"> week(s) on:
                </td>
            </tr>
            <tr class="day_holder">
                <th>Repeat on:</th>
                <td>
                    <a href="#" data-value="0">S</a>
                    <a href="#" data-value="1">M</a>
                    <a href="#" data-value="2">T</a>
                    <a href="#" data-value="3">W</a>
                    <a href="#" data-value="4">T</a>
                    <a href="#" data-value="5">F</a>
                    <a href="#" data-value="6">S</a>
                </td>
            </tr>
        </tbody>
        <tbody class="monthly_options freq_option_section" style="display: none;">
            <tr>
                <th> Every: </th>
                <td>
                    <input type="text" name="rs_monthly_interval" class="rs_monthly_interval rs_interval" value="1" size="2"> month(s):
                </td>
            </tr>
            <tr class="monthly_rule_type">
                <th>Repeat by:</th>
                <td>
                    <span>Day of month <input type="radio" class="monthly_rule_type_day" name="monthly_rule_type" value="true"></span>
                    <span>Day of week <input type="radio" class="monthly_rule_type_week" name="monthly_rule_type" value="true"></span>
                </td>
            </tr>
            <tr class="rs_calendar_day" style="display: table-row;">
                <th></th>
                <td>
                    <span>
                        <a>1</a>
                        <a>2</a>
                        <a>3</a>
                        <a>4</a>
                        <a>5</a>
                        <a>6</a>
                        <a>7</a>
                        <a>8</a>
                        <a>9</a>
                        <a>10</a>
                        <a>11</a>
                        <a>12</a>
                        <a>13</a>
                        <a>14</a>
                        <a>15</a>
                        <a>16</a>
                        <a>17</a>
                        <a>18</a>
                        <a>19</a>
                        <a>20</a>
                        <a>21</a>
                        <a>22</a>
                        <a>23</a>
                        <a>24</a>
                        <a>25</a>
                        <a>26</a>
                        <a>27</a>
                        <a>28</a>
                        <a>29</a>
                        <a>30</a>
                        <a>31</a>
                        <a class="end_of_month">Last Day</a>
                    </span>
                </td>
            </tr>
            <tr class="rs_calendar_week" style="display: none;">
                <th></th>
                <td>
                    <span>
                        <span>1st</span
                        <a day="0" instance="1">S</a>
                        <a day="1" instance="1">M</a>
                        <a day="2" instance="1">T</a>
                        <a day="3" instance="1">W</a>
                        <a day="4" instance="1">T</a>
                        <a day="5" instance="1">F</a>
                        <a day="6" instance="1">S</a>
                        <span>2nd</span>
                        <a day="0" instance="2">S</a>
                        <a day="1" instance="2">M</a>
                        <a day="2" instance="2">T</a>
                        <a day="3" instance="2">W</a>
                        <a day="4" instance="2">T</a>
                        <a day="5" instance="2">F</a>
                        <a day="6" instance="2">S</a>
                        <span>3rd</span>
                        <a day="0" instance="3">S</a>
                        <a day="1" instance="3">M</a>
                        <a day="2" instance="3">T</a>
                        <a day="3" instance="3">W</a>
                        <a day="4" instance="3">T</a>
                        <a day="5" instance="3">F</a>
                        <a day="6" instance="3">S</a>
                        <span>4th</span>
                        <a day="0" instance="4">S</a>
                        <a day="1" instance="4">M</a>
                        <a day="2" instance="4">T</a>
                        <a day="3" instance="4">W</a>
                        <a day="4" instance="4">T</a>
                        <a day="5" instance="4">F</a>
                        <a day="6" instance="4">S</a>
                        <span>5th</span>
                        <a day="0" instance="5">S</a>
                        <a day="1" instance="5">M</a>
                        <a day="2" instance="5">T</a>
                        <a day="3" instance="5">W</a>
                        <a day="4" instance="5">T</a>
                        <a day="5" instance="5">F</a>
                        <a day="6" instance="5">S</a>
                        <span>Last</span>
                        <a day="0" instance="-1">S</a>
                        <a day="1" instance="-1">M</a>
                        <a day="2" instance="-1">T</a>
                        <a day="3" instance="-1">W</a>
                        <a day="4" instance="-1">T</a>
                        <a day="5" instance="-1">F</a>
                        <a day="6" instance="-1" class="selected">S</a>
                    </span>
                </td>
            </tr>
        </tbody>
        <tbody class="yearly_options freq_option_section" style="display: none;">
            <tr>
                <th> Every: </th>
                <td>
                    <input type="text" name="rs_yearly_interval" class="rs_yearly_interval rs_interval" value="1" size="2"> year(s)
                </td>
            </tr>
        </tbody>
        <tbody class="ending_options">
            <tr>
                <th> Ends: </th>
                <td>
                    <span class="ending_never">
                        <input id="endson_never" type="radio" checked="" name="endson">
                        <label for="endson_never">Never</label>
                    </span>
                    <span class="ending_count">
                        <input id="endson_count" type="radio" name="endson">
                        <label for="endson_count"> After <input id="endson_count_value" type="text" disabled="" size="3"> Shows </label>
                    </span>
                    <span class="ending_until">
                        <input id="endson_until" type="radio" name="endson">
                        <label for="endson_until"> On <input id="endson_until_value" type="text" size="10"> </label>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="rs_summary" style="width: 295px;">
        <span>Summary: Weekly</span>
    </div>
    <div class="controls">
        <input type="button" class="rs_save" value="OK">
        <input type="button" class="rs_cancel" value="Cancel">
    </div>
</div>
`

