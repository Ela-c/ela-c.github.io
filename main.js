import "./style.css"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function tick(html_element, text_array)
{
    let delay = 0;
    while (true)
    {
        for (let i=0; i < text_array.length; i++)
        {       
            let full_text = text_array[i];
            let current_text = '';
            
            // writting characters
            while (current_text.length < full_text.length)
            {
                current_text = full_text.substring(0, current_text.length + 1);
                html_element.innerHTML = '<span class="wrap">' + current_text + '</span>';
                
                delay = 200 - Math.random() * 100;
                await sleep(delay);
            }
    
            await sleep(2000);
    
            // deleting characters
            while (current_text.length > 0)
            {
                current_text = full_text.substring(0, current_text.length - 1);
                html_element.innerHTML = '<span class="wrap">' + current_text + '</span>';
                
                delay = 100 - Math.random() * 50;
                await sleep(delay);
            }
    
            // TODO: Apply delay of 500 ms
            await sleep(500);
        }
    }
}

function main()
{
    let html_element = document.querySelector('.typewrite');
    let text_array = html_element.getAttribute('data-type');
    if (text_array) {
        tick(html_element, JSON.parse(text_array));
    }
}

main();