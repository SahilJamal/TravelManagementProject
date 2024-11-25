import React, { useState } from "react";
import { Button, Form, Alert, Col, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const AddProductScreen = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    pickup: "",
    drop: "",
    duration: "",
    descriptions: "",
    inclusions: [""],
    itinerary: [{ title: "", list: [""], notes: [""] }],
    exclusions: [""],
    image: null,
  });

  console.log("formData :>> ", formData);

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  // Validate form data
  const validate = () => {
    let newErrors = {};

    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.price) {
      newErrors.price = "Price is required.";
    } else if (isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = "Price must be a positive number.";
    }
    if (!formData.category) newErrors.category = "Category is required.";
    if (!formData.drop) newErrors.drop = "Drop is required.";
    if (!formData.pickup) newErrors.pickup = "Pickup is required.";
    if (!formData.duration) newErrors.duration = "Duration is required.";
    if (!formData.image) newErrors.image = "Image is required.";

    return newErrors;
  };

  const handleChange = (
    e,
    index,
    field,
    section,
    listIndex = null,
    noteIndex = null
  ) => {
    const { name, value, files } = e.target;

    if (section === "inclusions") {
      const updatedInclusions = [...formData.inclusions];
      updatedInclusions[index] = value;
      setFormData({ ...formData, inclusions: updatedInclusions });
    } else if (section === "exclusions") {
      const updatedExclusions = [...formData.exclusions];
      updatedExclusions[index] = value;
      setFormData({ ...formData, exclusions: updatedExclusions });
    } else if (section === "itinerary") {
      const updatedItinerary = [...formData.itinerary];
      if (listIndex !== null) {
        // Handling list inside itinerary
        updatedItinerary[index].list[listIndex] = value;
      } else if (noteIndex !== null) {
        // Handling notes inside itinerary
        updatedItinerary[index].notes[noteIndex] = value;
      } else {
        updatedItinerary[index][field] = value;
      }
      setFormData({ ...formData, itinerary: updatedItinerary });
    } else {
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    }
  };

  // Add a field
  const addField = (section, index = null) => {
    if (section === "inclusions") {
      setFormData({ ...formData, inclusions: [...formData.inclusions, ""] });
    } else if (section === "exclusions") {
      setFormData({ ...formData, exclusions: [...formData.exclusions, ""] });
    } else if (section === "itinerary") {
      setFormData({
        ...formData,
        itinerary: [
          ...formData.itinerary,
          { title: "", list: [""], notes: [""] },
        ],
      });
    } else if (section === "itineraryList") {
      const updatedItinerary = [...formData.itinerary];
      updatedItinerary[index].list.push("");
      setFormData({ ...formData, itinerary: updatedItinerary });
    } else if (section === "itineraryNotes") {
      const updatedItinerary = [...formData.itinerary];
      updatedItinerary[index].notes.push("");
      setFormData({ ...formData, itinerary: updatedItinerary });
    }
  };

  // Remove a field
  const removeField = (section, index, listIndex = null, noteIndex = null) => {
    if (section === "inclusions") {
      const updatedInclusions = [...formData.inclusions];
      updatedInclusions.splice(index, 1);
      setFormData({ ...formData, inclusions: updatedInclusions });
    } else if (section === "exclusions") {
      const updatedExclusions = [...formData.exclusions];
      updatedExclusions.splice(index, 1);
      setFormData({ ...formData, exclusions: updatedExclusions });
    } else if (section === "itineraryList") {
      const updatedItinerary = [...formData.itinerary];
      updatedItinerary[index].list.splice(listIndex, 1);
      setFormData({ ...formData, itinerary: updatedItinerary });
    } else if (section === "itineraryNotes") {
      const updatedItinerary = [...formData.itinerary];
      updatedItinerary[index].notes.splice(noteIndex, 1);
      setFormData({ ...formData, itinerary: updatedItinerary });
    } else if (section === "itinerary") {
      const updatedItinerary = [...formData.itinerary];
      updatedItinerary.splice(index, 1);
      setFormData({ ...formData, itinerary: updatedItinerary });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      setShowAlert(false);
    } else {
      setErrors(validationErrors);
      setShowAlert(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4rem">
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Please correct the highlighted fields.
        </Alert>
      )}

      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          isInvalid={!!errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {errors.title}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          isInvalid={!!errors.price}
        />
        <Form.Control.Feedback type="invalid">
          {errors.price}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          isInvalid={!!errors.category}
        />
        <Form.Control.Feedback type="invalid">
          {errors.category}
        </Form.Control.Feedback>
      </Form.Group>

      <Row>
        <Col lg={6}>
          <Form.Group controlId="formPickupDrop">
            <Form.Label>Pickup</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pickup location"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              isInvalid={!!errors.pickup}
            />
            <Form.Control.Feedback type="invalid">
              {errors.pickup}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group controlId="formPickupDrop">
            <Form.Label>Drop</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter drop location"
              name="drop"
              value={formData.drop}
              onChange={handleChange}
              isInvalid={!!errors.drop}
            />
            <Form.Control.Feedback type="invalid">
              {errors.drop}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formDuration">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          isInvalid={!!errors.duration}
        />
        <Form.Control.Feedback type="invalid">
          {errors.duration}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Descriptions */}
      <Form.Group controlId="formDescriptions">
        <Form.Label>Descriptions</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="descriptions"
          placeholder="Enter description"
          value={formData.descriptions}
          onChange={handleChange}
          className="mb-2"
        />
      </Form.Group>

      {/* Inclusions */}
      <Form.Group controlId="formInclusions">
        <Form.Label>Inclusions</Form.Label>
        {formData.inclusions.map((inclusion, index) => (
          <div key={index} className="mb-2">
            <Row>
              <Col lg={10}>
                <Form.Control
                  type="text"
                  placeholder="Enter inclusion"
                  value={inclusion}
                  onChange={(e) => handleChange(e, index, null, "inclusions")}
                />
              </Col>
              {formData.inclusions.length > 1 && (
                <Col lg={2}>
                  <Button
                    variant="danger"
                    onClick={() => removeField("inclusions", index)}
                  >
                    <FaTrash />
                  </Button>
                </Col>
              )}
            </Row>
          </div>
        ))}
        <Button variant="secondary" onClick={() => addField("inclusions")}>
          Add Inclusion
        </Button>
      </Form.Group>

      {/* Itinerary */}
      <Form.Group controlId="formItinerary">
        <Form.Label>Itinerary</Form.Label>
        {formData.itinerary.map((item, index) => (
          <div key={index} className="mb-4 p-3 rounded">
            <Row>
              <Col lg={12}>
                <Form.Control
                  type="text"
                  placeholder="Enter itinerary title"
                  value={item.title}
                  onChange={(e) => handleChange(e, index, "title", "itinerary")}
                  className="mb-2"
                />
              </Col>
            </Row>

            <Row>
              {/* Itinerary List */}
              <Col lg={6}>
                {item.list.map((listItem, listIndex) => (
                  <Row key={listIndex} className="mb-2">
                    <Col lg={10}>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Enter itinerary item"
                        value={listItem}
                        onChange={(e) =>
                          handleChange(e, index, null, "itinerary", listIndex)
                        }
                      />
                    </Col>
                    {item.list.length > 1 && (
                      <Col lg={1}>
                        <Button
                          variant="danger"
                          onClick={() =>
                            removeField("itineraryList", index, listIndex)
                          }
                        >
                          <FaTrash />
                        </Button>
                      </Col>
                    )}
                  </Row>
                ))}
                <Button
                  variant="secondary"
                  onClick={() => addField("itineraryList", index)}
                  className="mb-2"
                >
                  Add Itinerary Item
                </Button>
              </Col>

              <Col lg={6}>
                {/* Itinerary Notes */}
                {item.notes.map((note, noteIndex) => (
                  <Row key={noteIndex} className="mb-2">
                    <Col lg={10}>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Enter itinerary note"
                        value={note}
                        onChange={(e) =>
                          handleChange(
                            e,
                            index,
                            null,
                            "itinerary",
                            null,
                            noteIndex
                          )
                        }
                      />
                    </Col>
                    {item.notes.length > 1 && (
                      <Col lg={2}>
                        <Button
                          variant="danger"
                          onClick={() =>
                            removeField(
                              "itineraryNotes",
                              index,
                              null,
                              noteIndex
                            )
                          }
                        >
                          <FaTrash />
                        </Button>
                      </Col>
                    )}
                  </Row>
                ))}
                <Button
                  variant="secondary"
                  onClick={() => addField("itineraryNotes", index)}
                  className="mb-2"
                >
                  Add Itinerary Note
                </Button>
              </Col>
            </Row>

            {formData.itinerary.length > 1 && (
              <Button
                variant="danger"
                onClick={() => removeField("itinerary", index)}
              >
                <FaTrash /> Remove Itinerary
              </Button>
            )}
          </div>
        ))}
        <Button variant="secondary" onClick={() => addField("itinerary")}>
          Add Itinerary
        </Button>
      </Form.Group>

      {/* Exclution */}
      <Form.Group controlId="formInclusions">
        <Form.Label>Exclusions</Form.Label>
        {formData.exclusions.map((exclusion, index) => (
          <div key={index} className="mb-2">
            <Row>
              <Col lg={10}>
                <Form.Control
                  type="text"
                  placeholder="Enter inclusion"
                  value={exclusion}
                  onChange={(e) => handleChange(e, index, null, "exclusions")}
                />
              </Col>
              {formData.exclusions.length > 1 && (
                <Col lg={2}>
                  <Button
                    variant="danger"
                    onClick={() => removeField("exclusions", index)}
                  >
                    <FaTrash />
                  </Button>
                </Col>
              )}
            </Row>
          </div>
        ))}
        <Button variant="secondary" onClick={() => addField("exclusions")}>
          Add Exclution
        </Button>
      </Form.Group>

      {/* Image */}
      <Form.Group controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          name="image"
          onChange={handleChange}
          isInvalid={!!errors.image}
        />
        <Form.Control.Feedback type="invalid">
          {errors.image}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default AddProductScreen;
