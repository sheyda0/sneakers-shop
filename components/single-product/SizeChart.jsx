import CloseModalBtn from "../buttons/CloseModalBtn";
import ModalHeader from "../modal/ModalHeader";

const SizeChart = ({ handleHideModal }) => {
  return (
    <div className="size-chart-inner-wrap sizechart" datarole="focusable-scope">
      <div className="px-[2rem]">
        <ModalHeader title="Size Chart" handleClose={handleHideModal} />
      </div>
      <div
        className="size-chart-content overflow-y-scroll lg:pb-[4rem] h-[70vh] lg:h-[84.9vh] px-[1rem] lg:px-[2rem] py-[1rem]"
        datarole="content"
      >
        <div className="size-chart-texts">
          <p tabindex="0">
            Use the shoe size chart below to find your{" "}
            <strong>US, Euro, UK and CM/Mexico shoe sizes</strong>.&nbsp; Please
            note, this shoe size chart is ONLY a general guideline.&nbsp; Shoe
            sizes do vary from brand to brand as each brand manufactures their
            shoes differently.&nbsp; We strongly recommend measuring your feet
            at night because your feet expand throughout the day.&nbsp;
          </p>
          <p tabindex="0">
            Please use our <strong>Shoe Size Chart</strong> to help you{" "}
            <strong>convert your shoe size internationally</strong>.&nbsp;
            Example:&nbsp; If you wear a <strong>UK</strong> size 5 in women,
            you will be roughly a <strong>US</strong>size 7 in women.&nbsp;
          </p>
          <p tabindex="0">
            Please use our <strong>Shoe Size Chart</strong> to help you{" "}
            <strong>convert your shoe size from women to men</strong>
            .&nbsp; Example: If you wear a US size 8 in <strong>women</strong>,
            you will be roughly a US size 6.5 in <strong>men</strong>.
          </p>
          <p tabindex="0">
            For fur boots, we recommend 1 size larger than what you measure.
          </p>
          <div className="sizechart" id="shoechart">
            <div className="sizechart-content">
              <h2 className="sizechart-title" tabindex="0">
                Men &amp; Womens Shoes Size Conversion Chart
              </h2>
              <div className="flex justify-between">
                <div className="sizechart-column">
                  <table className="table sizechart-table">
                    <caption>Men&apos;s Shoes</caption>
                    <thead>
                      <tr tabindex="0">
                        <th>Euro</th>
                        <th aria-label="Unated States">US</th>
                        <th>Mexico</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr tabindex="0">
                        <td>41</td>
                        <td>7-7.5</td>
                        <td>26</td>
                      </tr>
                      <tr tabindex="0">
                        <td>42</td>
                        <td>8-8.5</td>
                        <td>27</td>
                      </tr>
                      <tr tabindex="0">
                        <td>43</td>
                        <td>9-9.5</td>
                        <td>28</td>
                      </tr>
                      <tr tabindex="0">
                        <td>44</td>
                        <td>10-10.5</td>
                        <td>29</td>
                      </tr>
                      <tr tabindex="0">
                        <td>45</td>
                        <td>11-11.5</td>
                        <td>30</td>
                      </tr>
                      <tr tabindex="0">
                        <td>46</td>
                        <td>12-12.5</td>
                        <td>31</td>
                      </tr>
                      <tr tabindex="0">
                        <td>47</td>
                        <td>13-13.5</td>
                        <td>32</td>
                      </tr>
                      <tr tabindex="0">
                        <td>48</td>
                        <td>14-14.5</td>
                        <td>33</td>
                      </tr>
                      <tr tabindex="0">
                        <td>49</td>
                        <td>15-15.5</td>
                        <td>34</td>
                      </tr>
                      <tr tabindex="0">
                        <td>50</td>
                        <td>16-16.5</td>
                        <td>35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="sizechart-column">
                  <table className="table sizechart-table">
                    <caption>Women&apos;s Shoes</caption>
                    <thead>
                      <tr tabindex="0">
                        <th>Euro</th>
                        <th aria-label="Unated States">US</th>
                        <th>Mexico</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr tabindex="0">
                        <td>35</td>
                        <td>4-4.5</td>
                        <td>19</td>
                      </tr>
                      <tr tabindex="0">
                        <td>36</td>
                        <td>5-5.5</td>
                        <td>20</td>
                      </tr>
                      <tr tabindex="0">
                        <td>37</td>
                        <td>6-6.5</td>
                        <td>21</td>
                      </tr>
                      <tr tabindex="0">
                        <td>38</td>
                        <td>7-7.5</td>
                        <td>22</td>
                      </tr>
                      <tr tabindex="0">
                        <td>39</td>
                        <td>8-8.5</td>
                        <td>23</td>
                      </tr>
                      <tr tabindex="0">
                        <td>40</td>
                        <td>9-9.5</td>
                        <td>24</td>
                      </tr>
                      <tr tabindex="0">
                        <td>41</td>
                        <td>10-10.5</td>
                        <td>25</td>
                      </tr>
                      <tr tabindex="0">
                        <td>42</td>
                        <td>11-11.5</td>
                        <td>26</td>
                      </tr>
                      <tr tabindex="0">
                        <td>43</td>
                        <td>12-12.5</td>
                        <td>27</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="sizechart-content">
              <h2 className="sizechart-title" tabindex="0">
                Kid&apos;s Shoes Conversion Chart
              </h2>
              <table className="table sizechart-table">
                <caption>Crib Shoes (Ages 0-12 Months)</caption>
                <thead>
                  <tr tabindex="0">
                    <th aria-label="Unated States">US</th>
                    <th>EURO</th>
                    <th aria-label="United Kingdom">UK</th>
                    <th>INCHES</th>
                    <th aria-label="Сentimeter">CM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabindex="0">
                    <td>0.5</td>
                    <td>16</td>
                    <td>0</td>
                    <td>3.25</td>
                    <td>8.3</td>
                  </tr>
                  <tr tabindex="0">
                    <td>1</td>
                    <td>16</td>
                    <td>0.5</td>
                    <td>3.5</td>
                    <td>8.9</td>
                  </tr>
                  <tr tabindex="0">
                    <td>1.5</td>
                    <td>17</td>
                    <td>1</td>
                    <td>3.625</td>
                    <td>9.2</td>
                  </tr>
                  <tr tabindex="0">
                    <td>2</td>
                    <td>17</td>
                    <td>1</td>
                    <td>3.75</td>
                    <td>9.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>2.5</td>
                    <td>18</td>
                    <td>1.5</td>
                    <td>4</td>
                    <td>10.2</td>
                  </tr>
                  <tr tabindex="0">
                    <td>3</td>
                    <td>18</td>
                    <td>2</td>
                    <td>4.125</td>
                    <td>10.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>3.5</td>
                    <td>19</td>
                    <td>2.5</td>
                    <td>4.25</td>
                    <td>10.8</td>
                  </tr>
                </tbody>
              </table>
              <table className="table sizechart-table">
                <caption>Toddler Shoes (Ages 1-4)</caption>
                <thead>
                  <tr tabindex="0">
                    <th aria-label="Unated States">US</th>
                    <th>EURO</th>
                    <th aria-label="United Kingdom">UK</th>
                    <th>INCHES</th>
                    <th aria-label="Сentimeter">CM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabindex="0">
                    <td>4</td>
                    <td>19</td>
                    <td>3</td>
                    <td>4.5</td>
                    <td>11.4</td>
                  </tr>
                  <tr tabindex="0">
                    <td>4.5</td>
                    <td>20</td>
                    <td>3.5</td>
                    <td>4.625</td>
                    <td>11.7</td>
                  </tr>
                  <tr tabindex="0">
                    <td>5</td>
                    <td>20</td>
                    <td>4</td>
                    <td>4.75</td>
                    <td>12.1</td>
                  </tr>
                  <tr tabindex="0">
                    <td>5.5</td>
                    <td>21</td>
                    <td>4.5</td>
                    <td>5</td>
                    <td>12.7</td>
                  </tr>
                  <tr tabindex="0">
                    <td>6</td>
                    <td>22</td>
                    <td>5</td>
                    <td>5.125</td>
                    <td>13</td>
                  </tr>
                  <tr tabindex="0">
                    <td>6.5</td>
                    <td>22</td>
                    <td>5.5</td>
                    <td>5.25</td>
                    <td>13.3</td>
                  </tr>
                  <tr tabindex="0">
                    <td>7</td>
                    <td>23</td>
                    <td>6</td>
                    <td>5.5</td>
                    <td>14</td>
                  </tr>
                  <tr tabindex="0">
                    <td>7.5</td>
                    <td>23</td>
                    <td>6.5</td>
                    <td>5.625</td>
                    <td>14.3</td>
                  </tr>
                  <tr tabindex="0">
                    <td>8</td>
                    <td>24</td>
                    <td>7</td>
                    <td>5.75</td>
                    <td>14.6</td>
                  </tr>
                  <tr tabindex="0">
                    <td>8.5</td>
                    <td>25</td>
                    <td>7.35</td>
                    <td>6</td>
                    <td>15.2</td>
                  </tr>
                  <tr tabindex="0">
                    <td>9</td>
                    <td>25</td>
                    <td>8</td>
                    <td>6.125</td>
                    <td>15.6</td>
                  </tr>
                  <tr tabindex="0">
                    <td>9.5</td>
                    <td>26</td>
                    <td>8.5</td>
                    <td>6.25</td>
                    <td>15.9</td>
                  </tr>
                  <tr tabindex="0">
                    <td>10</td>
                    <td>27</td>
                    <td>9</td>
                    <td>6.5</td>
                    <td>16.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>10.5</td>
                    <td>27</td>
                    <td>9.5</td>
                    <td>6.625</td>
                    <td>16.8</td>
                  </tr>
                </tbody>
              </table>
              <table className="table sizechart-table">
                <caption>Pre-School Shoes (Ages 4-8)</caption>
                <thead>
                  <tr tabindex="0">
                    <th aria-label="Unated States">US</th>
                    <th>EURO</th>
                    <th aria-label="United Kingdom">UK</th>
                    <th>INCHES</th>
                    <th aria-label="Сentimeter">CM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabindex="0">
                    <td>11</td>
                    <td>28</td>
                    <td>10</td>
                    <td>6.75</td>
                    <td>17.1</td>
                  </tr>
                  <tr tabindex="0">
                    <td>11.5</td>
                    <td>29</td>
                    <td>10.5</td>
                    <td>7</td>
                    <td>17.8</td>
                  </tr>
                  <tr tabindex="0">
                    <td>12</td>
                    <td>30</td>
                    <td>11</td>
                    <td>7.125</td>
                    <td>18.1</td>
                  </tr>
                  <tr tabindex="0">
                    <td>12.5</td>
                    <td>30</td>
                    <td>11.5</td>
                    <td>7.25</td>
                    <td>18.4</td>
                  </tr>
                  <tr tabindex="0">
                    <td>13</td>
                    <td>31</td>
                    <td>12</td>
                    <td>7.5</td>
                    <td>19.1</td>
                  </tr>
                  <tr tabindex="0">
                    <td>13.5</td>
                    <td>31</td>
                    <td>12.5</td>
                    <td>7.625</td>
                    <td>19.4</td>
                  </tr>
                  <tr tabindex="0">
                    <td>1</td>
                    <td>32</td>
                    <td>13</td>
                    <td>7.75</td>
                    <td>19.7</td>
                  </tr>
                  <tr tabindex="0">
                    <td>1.5</td>
                    <td>33</td>
                    <td>14</td>
                    <td>8</td>
                    <td>20.3</td>
                  </tr>
                  <tr tabindex="0">
                    <td>2</td>
                    <td>33</td>
                    <td>1</td>
                    <td>8.125</td>
                    <td>20.6</td>
                  </tr>
                  <tr tabindex="0">
                    <td>2.5</td>
                    <td>34</td>
                    <td>1.5</td>
                    <td>8.25</td>
                    <td>21</td>
                  </tr>
                  <tr tabindex="0">
                    <td>3</td>
                    <td>34</td>
                    <td>2</td>
                    <td>8.5</td>
                    <td>21.6</td>
                  </tr>
                  <tr tabindex="0">
                    <td>3.5</td>
                    <td>35</td>
                    <td>2.5</td>
                    <td>8.625</td>
                    <td>21.9</td>
                  </tr>
                </tbody>
              </table>
              <table className="table sizechart-table">
                <caption>Grade School Shoes (Ages 8-12)</caption>
                <thead>
                  <tr tabindex="0">
                    <th aria-label="Unated States">US</th>
                    <th>EURO</th>
                    <th aria-label="United Kingdom">UK</th>
                    <th>INCHES</th>
                    <th aria-label="Сentimeter">CM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabindex="0">
                    <td>4</td>
                    <td>36</td>
                    <td>3</td>
                    <td>8.75</td>
                    <td>22.2</td>
                  </tr>
                  <tr tabindex="0">
                    <td>4.5</td>
                    <td>36</td>
                    <td>3.5</td>
                    <td>9</td>
                    <td>22.9</td>
                  </tr>
                  <tr tabindex="0">
                    <td>5</td>
                    <td>37</td>
                    <td>4</td>
                    <td>9.125</td>
                    <td>23.2</td>
                  </tr>
                  <tr tabindex="0">
                    <td>5.5</td>
                    <td>37</td>
                    <td>4.5</td>
                    <td>9.25</td>
                    <td>23.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>6</td>
                    <td>38</td>
                    <td>5</td>
                    <td>9.5</td>
                    <td>24.1</td>
                  </tr>
                  <tr tabindex="0">
                    <td>6.5</td>
                    <td>38</td>
                    <td>5.5</td>
                    <td>9.625</td>
                    <td>24.4</td>
                  </tr>
                  <tr tabindex="0">
                    <td>7</td>
                    <td>39</td>
                    <td>6</td>
                    <td>9.75</td>
                    <td>24.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sizechart-content">
              <h2 className="sizechart-title" tabindex="0">
                Men&apos;s to Women&apos;s Shoes Conversion Chart
              </h2>
              <table className="table sizechart-table">
                <caption>Shop Women&apos;s Shoes for Men</caption>
                <thead>
                  <tr tabindex="0">
                    <th>Men&apos;s/Youth</th>
                    <th>Women&apos;s</th>
                    <th>UK</th>
                    <th>Euro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabindex="0">
                    <td>2</td>
                    <td>4</td>
                    <td>1</td>
                    <td>34</td>
                  </tr>
                  <tr tabindex="0">
                    <td>2.5</td>
                    <td>4.5</td>
                    <td>1.5</td>
                    <td>34.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>3</td>
                    <td>5</td>
                    <td>2.5</td>
                    <td>35</td>
                  </tr>
                  <tr tabindex="0">
                    <td>3.5</td>
                    <td>5.5</td>
                    <td>3</td>
                    <td>35.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>4</td>
                    <td>6</td>
                    <td>3.5</td>
                    <td>36</td>
                  </tr>
                  <tr tabindex="0">
                    <td>4.5</td>
                    <td>6.5</td>
                    <td>4</td>
                    <td>36.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>5</td>
                    <td>7</td>
                    <td>4.5</td>
                    <td>37</td>
                  </tr>
                  <tr tabindex="0">
                    <td>5.5</td>
                    <td>7.5</td>
                    <td>5</td>
                    <td>38</td>
                  </tr>
                  <tr tabindex="0">
                    <td>6</td>
                    <td>8</td>
                    <td>5.5</td>
                    <td>39</td>
                  </tr>
                  <tr tabindex="0">
                    <td>6.5</td>
                    <td>8.5</td>
                    <td>6</td>
                    <td>39.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>7</td>
                    <td>9</td>
                    <td>6.5</td>
                    <td>40</td>
                  </tr>
                  <tr tabindex="0">
                    <td>7.5</td>
                    <td>9.5</td>
                    <td>7</td>
                    <td>41</td>
                  </tr>
                  <tr tabindex="0">
                    <td>8</td>
                    <td>10</td>
                    <td>7.5</td>
                    <td>41.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>8.5</td>
                    <td>10.5</td>
                    <td>8</td>
                    <td>42</td>
                  </tr>
                  <tr tabindex="0">
                    <td>9</td>
                    <td>11</td>
                    <td>8.5</td>
                    <td>43</td>
                  </tr>
                  <tr tabindex="0">
                    <td>9.5</td>
                    <td>11.5</td>
                    <td>9</td>
                    <td>43.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>10</td>
                    <td>12</td>
                    <td>9.5</td>
                    <td>44</td>
                  </tr>
                  <tr tabindex="0">
                    <td>10.5</td>
                    <td>12.5</td>
                    <td>10</td>
                    <td>44.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>11</td>
                    <td>13</td>
                    <td>10.5</td>
                    <td>45</td>
                  </tr>
                  <tr tabindex="0">
                    <td>11.5</td>
                    <td>13.5</td>
                    <td>11</td>
                    <td>46</td>
                  </tr>
                  <tr tabindex="0">
                    <td>12</td>
                    <td>14</td>
                    <td>11.5</td>
                    <td>46.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sizechart-content">
              <h2 className="sizechart-title" tabindex="0">
                Women&apos;s to Grade School Shoes Conversion Chart
              </h2>
              <table className="table sizechart-table">
                <caption>Shop Women&apos;s Shoes for Grade School</caption>
                <thead>
                  <tr tabindex="0">
                    <th>Women&apos;s</th>
                    <th> Grade School</th>
                  </tr>
                </thead>
                <tbody>
                  <tr tabindex="0">
                    <td>5</td>
                    <td>3.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>5.5</td>
                    <td>4</td>
                  </tr>
                  <tr tabindex="0">
                    <td>6</td>
                    <td>4.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>6.5</td>
                    <td>5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>7</td>
                    <td>5.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>7.5</td>
                    <td>6</td>
                  </tr>
                  <tr tabindex="0">
                    <td>8</td>
                    <td>6.5</td>
                  </tr>
                  <tr tabindex="0">
                    <td>8.5</td>
                    <td>7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SizeChart;
