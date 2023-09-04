```
import { ProductButtons, ProductCard, ProductTitle, ProductImage } from "oh-product-card";
```




```
<ProductCard
                    key={ product.id }
                    product={ product }
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />
                            </>
                        )
                    }
                </ProductCard>

```