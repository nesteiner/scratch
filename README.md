
# Table of Contents

1.  [Layout](#org799a53f)
    1.  [弹性布局](#org16f5c8c)
    2.  [层叠布局](#orgf9abcec)
    3.  [限制容器](#org7700e33)
    4.  [网格布局](#orge3b8509)
        1.  [介绍](#org368a148)
        2.  [实例](#orgbdffe17)



<a id="org799a53f"></a>

# Layout

这里仿照 `Flutter` 的风格，写了几个布局类组件，主要目的是少写 `CSS` ，省得我还要命名  


<a id="org16f5c8c"></a>

## 弹性布局

弹性布局有两个方向，横向的 `Row` 和竖向的 `Column` ，另外还有填充空间的组件 `Expanded`  
`Row/Column` 都有其各自的 `main-axis` 和 `cross-axis` 属性，也就是 `css` 中的 `justify-content` 和 `align-items`  

    <Row main-axis="center">
      <!-- put your elements here -->
      <p> Hello World </p>
      <p> Fuck You </p>
      <p> Holy Shit </p>
    
      <Expanded>
        <p> this is expanded</p>
      </Expanded>
    </Row>

**注意**  

1.  弹性，要在 **定长** 的容器中才能体现
2.  因为 `block` 元素会根据内容来调整大小，这个情况在 `网格布局中` 设置 `align-content` 属性时尤其能够体现
3.  `Expanded` 容器有属性 `flex` 默认为 `1`
4.  `flex`  为其他正数时，所有的Expanded按照其 `flex` 的比例来分割主轴的全部空闲空间
5.  需要用 `Expanded` 容器包装才能体现


<a id="orgf9abcec"></a>

## TODO 层叠布局


<a id="org7700e33"></a>

## TODO 限制容器


<a id="orge3b8509"></a>

## DONE 网格布局


<a id="org368a148"></a>

### 介绍

`Grid` 组件不需要像表格那样用行或列来包装组件，直接把组件写到标签内部即可  
可以在 `Grid` 中设置以下属性  

-   `template-columns`
-   `tempate-rows`
-   `template-areas`
-   `justify-content`
-   `align-content`
-   `justify-items`
-   `align-items`
-   `gap`

在网格子组件中可以设置 `v-area:[areaname]` 来指定其 `grid-area` 属性  


<a id="orgbdffe17"></a>

### 实例

    <grid
      class="grid-wrapper"
      template-columns="repeat(3, 100px)"
      template-rows="repeat(3, 100px)"
      :template-areas="areas"
      align-content="space-around"
      gap="10px">
      <div class="item1" v-area:a> Item 1 </div>
      <div class="item2" v-area:b> Item 2 </div>
      <div class="item3" v-area:c> Item 3 </div>
      <div class="item4" v-area:d> Item 4 </div>
    </grid>

    const areas = '"a a b" \
    "a a b" \
    "c d d" \
    '

![img](../../../../ChiniBlogs/src/images/Layout/2022-01-21_20-33-02_screenshot.png)  

