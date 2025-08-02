// src/components/FaqSection.jsx
function FaqSection() {
  return (
    <section id="faq" className="faq wrapper py-5">
      <div className="container">
        <div className="text-center pb-4">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="row pt-4">
          <div className="col-sm-6 mb-4">
            <h4><span>~</span> What is the return policy?</h4>
            <p>Far far away, behind the word mountains...</p>
          </div>
          <div className="col-sm-6 mb-4">
            <h4><span>~</span> Do you offer free shipping?</h4>
            <p>Far far away, behind the word mountains...</p>
          </div>
          <div className="col-sm-6 mb-4">
            <h4><span>~</span> Can I cancel or change my order?</h4>
            <p>Far far away, behind the word mountains...</p>
          </div>
          <div className="col-sm-6 mb-4">
            <h4><span>~</span> When are you opening near me?</h4>
            <p>Far far away, behind the word mountains...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
